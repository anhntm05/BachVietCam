import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../config/env';
import { PairEvaluationResult } from './ai.service';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

export async function generateAIFeedback(result: PairEvaluationResult): Promise<string> {
  if (!config.geminiApiKey) {
    return 'Chưa cấu hình API Key cho AI nên không thể đưa ra nhận xét.';
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });

    let segmentsContext = '';
    if (result.error_segments && result.error_segments.length > 0) {
      segmentsContext += '\n- Các đoạn thời gian học viên chơi lỗi CAO ĐỘ nhiều nhất:\n' + 
        result.error_segments.map(seg => {
          const issue = seg.avg_cents_diff > 0 ? 'đánh quá cao (căng dây)' : 'đánh quá thấp (chùng dây)';
          return `  + Từ giây ${seg.start_time} đến ${seg.end_time}: ${issue} (Lệch ${Math.abs(seg.avg_cents_diff)} cents).`;
        }).join('\n');
    }

    if (result.rhythm_segments && result.rhythm_segments.length > 0) {
      segmentsContext += '\n- Các đoạn thời gian học viên chơi lỗi NHỊP (nhanh/chậm/mất nhịp):\n' + 
        result.rhythm_segments.map(seg => {
          let issue = '';
          if (seg.status === 'fast') issue = 'đánh vội/nhanh hơn nhịp gốc';
          else if (seg.status === 'slow') issue = 'đánh rề rà/chậm hơn nhịp gốc';
          else if (seg.status === 'missing') issue = 'khựng lại hoặc lỡ nhịp hoàn toàn';
          return `  + Từ giây ${seg.start_time} đến ${seg.end_time}: ${issue}.`;
        }).join('\n');
    }

    const prompt = `Bạn là một giáo viên dạy nhạc cụ truyền thống Việt Nam chuyên nghiệp nhưng thân thiện.
Học sinh của bạn vừa chơi một đoạn nhạc với nhạc cụ: ${result.instrument || 'Nhạc cụ truyền thống'}.
Sau đây là kết quả phân tích hệ thống (so với bản mẫu của bạn):
- Độ chuẩn xác cao độ: ${result.pitch_accuracy_percent.toFixed(2)}%
- Độ lệch trung bình (cents): ${result.mean_deviation_cents !== null ? result.mean_deviation_cents.toFixed(2) : 'Không xác định'} cents
- Tốc độ học sinh (Tempo): ${result.student_tempo_bpm?.toFixed(2) || 'Không xác định'} BPM
- Tốc độ bản gốc của bạn (Tempo): ${result.teacher_tempo_bpm?.toFixed(2) || 'Không xác định'} BPM${segmentsContext}

Hãy đưa ra nhận xét NGẮN GỌN (tối đa 4-5 câu):
1. Khích lệ tinh thần học viên.
2. Dựa vào độ lệch chung và đặc biệt là CÁC ĐOẠN LỖI CAO ĐỘ và LỖI NHỊP (nếu có) để nhắc nhở cụ thể. Ví dụ: "Ở giây thứ X đến Y, em đánh hơi căng dây...", hoặc "Đoạn từ giây A đến B em bị vội nhịp...".
3. Chúc học viên thực hành tốt hơn ở lần sau.

Đừng giải thích dài dòng về cents hay BPM, hãy nói bằng ngôn ngữ sư phạm dễ hiểu.`;

    const response = await model.generateContent(prompt);
    const text = response.response.text();
    return text || 'Rất tốt, hãy tiếp tục phát huy nhé!';
  } catch (error) {
    console.error('Lỗi khi gọi Gemini AI:', error);
    return 'Hệ thống AI đang bận, không thể đưa ra nhận xét lúc này. Bạn hãy thử lại sau nhé.';
  }
}
