/**
 * Multer luu file ghi am cua hoc vien vao shared_storage/uploads.
 * Django se doc lai file nay theo duong dan, nen ca hai service
 * phai cung tro toi mot thu muc dung chung.
 */
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { config } from '../config/env';

const ALLOWED_EXT = new Set(['.mp3', '.wav', '.m4a', '.ogg', '.flac', '.webm']);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const uploadDir = path.resolve(config.sharedStoragePath, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase() || '.mp3';
    cb(null, `student-${unique}${ext}`);
  },
});

function fileFilter(
  _req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) {
    cb(new Error(`Dinh dang khong ho tro: ${ext}`));
    return;
  }
  cb(null, true);
}

export const uploadMiddleware = multer({
  storage,
  fileFilter,
  limits: { fileSize: config.maxUploadBytes },
});
