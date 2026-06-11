import { Router } from 'express';
import { uploadMiddleware } from '../middlewares/upload.middleware';
import { evaluateController } from '../controllers/evaluation.controller';
import { evaluatePairController } from '../controllers/evaluation-pair.controller';

import authRouter from './auth.routes';
import adminRouter from './admin.routes';
import { verifyToken, isAdmin } from '../middlewares/auth.middleware';

const router = Router();

// Auth routes
router.use('/auth', authRouter);

// Admin routes (Protected)
router.use('/admin', verifyToken, isAdmin, adminRouter);

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
