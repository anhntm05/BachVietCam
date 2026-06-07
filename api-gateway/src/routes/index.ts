import { Router } from 'express';
import { uploadMiddleware } from '../middlewares/upload.middleware';
import { evaluateController } from '../controllers/evaluation.controller';
import { evaluatePairController } from '../controllers/evaluation-pair.controller';

const router = Router();

// Client gui multipart/form-data: truong file ten 'audio', kem instrument_id.
router.post('/evaluate', uploadMiddleware.single('audio'), evaluateController);

// So truc tiep hai file: truong 'teacher' va 'student', kem instrument_id.
router.post(
  '/evaluate-pair',
  uploadMiddleware.fields([
    { name: 'teacher', maxCount: 1 },
    { name: 'student', maxCount: 1 },
  ]),
  evaluatePairController
);

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default router;
