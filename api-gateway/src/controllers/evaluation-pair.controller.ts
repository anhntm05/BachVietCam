/**
 * Controller cham diem so truc tiep hai file: giao vien va hoc vien.
 *
 * Nhan hai truong file qua Multer: 'teacher' va 'student'. Express tao
 * ca hai file nen xoa ca hai trong finally, du thanh cong hay loi.
 */
import fs from 'fs/promises';
import { Request, Response } from 'express';
import {
  requestPairEvaluation,
  AiServiceError,
} from '../services/ai.service';

type MulterFiles = { [field: string]: Express.Multer.File[] };

export async function evaluatePairController(req: Request, res: Response) {
  const files = req.files as MulterFiles | undefined;
  const teacherFile = files?.teacher?.[0];
  const studentFile = files?.student?.[0];
  const instrumentId = req.body.instrument_id as string | undefined;

  let teacherConvertedPath: string | undefined;
  let studentConvertedPath: string | undefined;

  const cleanup = async () => {
    if (teacherFile) await safeUnlink(teacherFile.path);
    if (studentFile) await safeUnlink(studentFile.path);
    if (teacherConvertedPath) await safeUnlink(teacherConvertedPath);
    if (studentConvertedPath) await safeUnlink(studentConvertedPath);
  };

  if (!teacherFile || !studentFile) {
    await cleanup();
    return res
      .status(400)
      .json({ error: 'Can ca hai file: ban mau giao vien va ban hoc vien' });
  }
  if (!instrumentId) {
    await cleanup();
    return res.status(400).json({ error: 'Thieu instrument_id' });
  }

  try {
    const { convertToWav } = await import('../utils/audio.util');
    
    // Convert ca 2 file sang wav de Python co the xu ly doc lap voi ffmpeg
    teacherConvertedPath = await convertToWav(teacherFile.path);
    studentConvertedPath = await convertToWav(studentFile.path);

    const result = await requestPairEvaluation(
      teacherConvertedPath,
      studentConvertedPath,
      instrumentId
    );

    const { generateAIFeedback } = await import('../services/llm.service');
    const aiFeedback = await generateAIFeedback(result);

    try {
      const { Activity } = await import('../models/Activity');
      await Activity.create({
        action: 'AI Evaluation (Pair)',
        user: req.body.user || 'Guest',
        instrument: instrumentId,
        score: Math.round(result.pitch_accuracy_percent || 0),
        time: 'Vừa xong',
        icon: 'mic'
      });
    } catch (dbErr) {
      console.error('Failed to log activity:', dbErr);
    }

    return res.status(200).json({
      ...result,
      ai_feedback: aiFeedback
    });
  } catch (err) {
    if (err instanceof AiServiceError) {
      return res.status(err.status).json({ error: err.message });
    }
    return res
      .status(500)
      .json({ error: `Loi gateway: ${(err as Error).message}` });
  } finally {
    await cleanup();
  }
}

async function safeUnlink(filePath: string) {
  try {
    await fs.unlink(filePath);
  } catch {
    // bo qua neu file da khong con
  }
}
