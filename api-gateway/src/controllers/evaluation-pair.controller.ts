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

  const cleanup = async () => {
    if (teacherFile) await safeUnlink(teacherFile.path);
    if (studentFile) await safeUnlink(studentFile.path);
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
    const result = await requestPairEvaluation(
      teacherFile.path,
      studentFile.path,
      instrumentId
    );
    return res.status(200).json(result);
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
