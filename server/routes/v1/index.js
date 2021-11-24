import express from 'express';
import { authRouter } from './auth.js';
import { userRouter } from './user.js';
import { workplacesRouter } from './workplaces.js';

export const router_v1 = express.Router();

router_v1.use('/auth', authRouter)
router_v1.use('/user', userRouter)
router_v1.use('/workplaces', workplacesRouter)