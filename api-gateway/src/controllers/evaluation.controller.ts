/**
 * Controller cham diem.
 *
 * Express la ben tao file (qua Multer) nen cung la ben chiu trach nhiem
 * xoa file. Django chi doc, khong dung toi viec don dep. Xoa trong finally
 * de du loi xay ra van khong de lai file rac trong shared_storage.
 */
import fs from 'fs/promises';
import { Request, Response } from 'express';
import { requestEvaluation, AiServiceError } from '../services/ai.service';

export async function evaluateController(req: Request, res: Response) {
  const file = req.file;
  const instrumentId = req.body.instrument_id as string | undefined;

  if (!file) {
    return res.status(400).json({ error: 'Thieu tep ghi am (truong "audio")' });
  }
  if (!instrumentId) {
    // Xoa file vua luu vi request khong hop le.
    await safeUnlink(file.path);
    return res.status(400).json({ error: 'Thieu instrument_id' });
  }

  let convertedPath: string | undefined;

  try {
    const { convertToWav } = await import('../utils/audio.util');
    convertedPath = await convertToWav(file.path);

    const result = await requestEvaluation(convertedPath, instrumentId);
    
    try {
      const { Activity } = await import('../models/Activity');
      await Activity.create({
        action: 'AI Evaluation',
        user: req.body.user || 'Guest',
        instrument: instrumentId,
        score: Math.round(result.pitch_accuracy_percent || 0),
        time: 'Vừa xong',
        icon: 'mic'
      });
    } catch (dbErr) {
      console.error('Failed to log activity:', dbErr);
    }

    return res.status(200).json(result);
  } catch (err) {
    if (err instanceof AiServiceError) {
      return res.status(err.status).json({ error: err.message });
    }
    return res
      .status(500)
      .json({ error: `Loi gateway: ${(err as Error).message}` });
  } finally {
    await safeUnlink(file.path);
    if (convertedPath) await safeUnlink(convertedPath);
  }
}

async function safeUnlink(filePath: string) {
  try {
    await fs.unlink(filePath);
  } catch {
    // File co the da bi xoa hoac chua kip tao, bo qua.
  }
}
