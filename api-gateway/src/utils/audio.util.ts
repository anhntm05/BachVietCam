import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';

// Set the path to the statically linked ffmpeg binary
if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
} else {
  console.error("Khong tim thay ffmpeg-static!");
}

/**
 * Chuyển đổi một file âm thanh (mp3, webm, v.v.) sang file WAV chuẩn (PCM 16-bit, 22050Hz).
 * Điều này rất quan trọng để librosa bên Python có thể đọc được file trên Windows mà không cần cài ffmpeg.
 *
 * @param inputPath Đường dẫn tới file âm thanh gốc.
 * @returns Đường dẫn tới file WAV mới được tạo.
 */
export function convertToWav(inputPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Generate a new file path with .wav extension
    const parsedPath = path.parse(inputPath);
    const outputPath = path.join(parsedPath.dir, `${parsedPath.name}_converted_${Date.now()}.wav`);

    ffmpeg(inputPath)
      .toFormat('wav')
      // Đặt thông số chuẩn cho Librosa (mono, 22050Hz) để Python xử lý nhanh hơn
      .audioChannels(1)
      .audioFrequency(22050)
      .on('error', (err) => {
        console.error(`Lỗi khi convert file ${inputPath}:`, err);
        reject(err);
      })
      .on('end', () => {
        resolve(outputPath);
      })
      .save(outputPath);
  });
}
