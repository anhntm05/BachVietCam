/**
 * Goi sang Django AI service.
 *
 * Django view nhan tham so qua request.POST (form-urlencoded), khong
 * phai JSON body. Nen o day phai gui dung dang form de khop giao keo,
 * neu khong Django se khong doc duoc instrument_id va file_path.
 */
import { config } from '../config/env';

export interface EvaluationResult {
  pitch_accuracy_percent: number;
  mean_deviation_cents: number | null;
  total_voiced_frames: number;
  passed_frames: number;
  tempo_bpm: number;
  instrument: string;
}

export async function requestEvaluation(
  filePath: string,
  instrumentId: string
): Promise<EvaluationResult> {
  const body = new URLSearchParams();
  body.append('file_path', filePath);
  body.append('instrument_id', instrumentId);

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    config.aiRequestTimeoutMs
  );

  try {
    const res = await fetch(`${config.aiServiceUrl}/api/evaluate/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: controller.signal,
    });

    const data = await res.json();
    if (!res.ok) {
      // Day nguyen thong bao loi cua Django len tren de de debug.
      const message = (data && data.error) || 'Loi khong xac dinh tu AI service';
      throw new AiServiceError(message, res.status);
    }
    return data as EvaluationResult;
  } catch (err) {
    if (err instanceof AiServiceError) throw err;
    if (err instanceof Error && err.name === 'AbortError') {
      throw new AiServiceError('AI service xu ly qua lau (timeout)', 504);
    }
    throw new AiServiceError(
      `Khong ket noi duoc toi AI service: ${(err as Error).message}`,
      502
    );
  } finally {
    clearTimeout(timeout);
  }
}

export class AiServiceError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'AiServiceError';
    this.status = status;
  }
}

export interface PairEvaluationResult {
  pitch_accuracy_percent: number;
  mean_deviation_cents: number | null;
  total_voiced_frames: number;
  passed_frames: number;
  teacher_tempo_bpm: number;
  student_tempo_bpm: number;
  instrument: string;
}

export async function requestPairEvaluation(
  teacherPath: string,
  studentPath: string,
  instrumentId: string
): Promise<PairEvaluationResult> {
  const body = new URLSearchParams();
  body.append('teacher_path', teacherPath);
  body.append('student_path', studentPath);
  body.append('instrument_id', instrumentId);

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    config.aiRequestTimeoutMs
  );

  try {
    const res = await fetch(`${config.aiServiceUrl}/api/evaluate-pair/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: controller.signal,
    });

    const data = await res.json();
    if (!res.ok) {
      const message = (data && data.error) || 'Loi khong xac dinh tu AI service';
      throw new AiServiceError(message, res.status);
    }
    return data as PairEvaluationResult;
  } catch (err) {
    if (err instanceof AiServiceError) throw err;
    if (err instanceof Error && err.name === 'AbortError') {
      throw new AiServiceError('AI service xu ly qua lau (timeout)', 504);
    }
    throw new AiServiceError(
      `Khong ket noi duoc toi AI service: ${(err as Error).message}`,
      502
    );
  } finally {
    clearTimeout(timeout);
  }
}
