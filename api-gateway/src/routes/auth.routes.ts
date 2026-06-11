import { Router } from 'express';
import { register, login, forgotPassword, verifyOtp, resetPassword, logout, getMe } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);
router.post('/logout', logout);
router.get('/me', verifyToken, getMe);

export default router;
