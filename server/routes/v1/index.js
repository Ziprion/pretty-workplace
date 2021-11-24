import express from 'express';
import { authRouter } from './auth.js';
import { userRouter } from './user.js';
import { workplacesRouter } from './workplaces.js';

export const routerV1 = express.Router();

routerV1.use('/auth', authRouter);
routerV1.use('/user', userRouter);
routerV1.use('/workplaces', workplacesRouter);
