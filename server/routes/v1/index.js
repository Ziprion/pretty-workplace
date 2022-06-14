import express from 'express';

import { API } from '../../constants/index.js';
import { authRouter } from './auth.js';
import { boardsRouter } from './boards.js';
import { itemsRouter } from './items.js';
import { userRouter } from './user.js';
import { workplacesRouter } from './workplaces.js';

export const apiV1 = `${API}/v1`;
export const routerV1 = express.Router();

routerV1.use('/auth', authRouter);
routerV1.use('/user', userRouter);
routerV1.use('/workplaces', workplacesRouter);
routerV1.use('/items', itemsRouter);
routerV1.use('/boards', boardsRouter);
