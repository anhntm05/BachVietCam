/**
 * Doc va kiem tra bien moi truong. Tap trung mot cho de tranh
 * rai rac process.env khap noi va de bat loi thieu cau hinh som.
 */
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

function required(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Thieu bien moi truong bat buoc: ${key}`);
  }
  return value;
}

// Mac dinh shared_storage nam cung cap voi api-gateway, khop cau truc du an.
const defaultShared = path.resolve(__dirname, '../../../shared_storage');

export const config = {
  port: parseInt(process.env.PORT ?? '4000', 10),

  // URL cua Django AI service. Phai tro toi endpoint /api/ cua Django.
  aiServiceUrl: required('AI_SERVICE_URL', 'http://127.0.0.1:8000'),

  // Thu muc dung chung voi Django. Express ghi file vao day,
  // Django doc ra theo file_path.
  sharedStoragePath: process.env.SHARED_STORAGE_PATH ?? defaultShared,

  // Gioi han kich thuoc file ghi am.
  maxUploadBytes: 25 * 1024 * 1024,

  // Timeout khi goi sang Django. pYIN cham nen de rong rai.
  aiRequestTimeoutMs: parseInt(process.env.AI_TIMEOUT_MS ?? '120000', 10),

  // CORS Origin cho phep frontend goi api. Split bang dau phay neu co nhieu domain.
  corsOrigin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : 'http://localhost:3000',
};
