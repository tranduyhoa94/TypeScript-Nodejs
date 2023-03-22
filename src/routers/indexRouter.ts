import { Router } from 'express';
import eventRouter from './events/eventRouter';

const router = Router();

router.use('/events', eventRouter);

export default router;