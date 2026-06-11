import { Router } from 'express';
import { getUsers, getEvaluations, getDashboardMetrics, getActivities, getInstruments } from '../controllers/admin.controller';

const router = Router();

router.get('/users', getUsers);
router.get('/evaluations', getEvaluations);
router.get('/dashboard/metrics', getDashboardMetrics);
router.get('/dashboard/activities', getActivities);
router.get('/instruments', getInstruments);

export default router;
