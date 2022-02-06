import express from 'express';

import {
  addBoard,
  deleteBoard,
  getIsExistBoardById,
  getIsExistBoardByTitle,
  getUserWorkplaceById,
} from '../../db/index.js';
import { getAuthUser } from '../../utils/index.js';

export const boardsRouter = express.Router();

boardsRouter.post('/add', async (req, res) => {
  const user = await getAuthUser(req);

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const { boardTitle, workplaceId, boardOrder = 0 } = req?.body;

  if (!(boardTitle && workplaceId)) {
    return res.status(400).send({ message: 'Bad request' });
  }

  const hasUserWorkplace = await getUserWorkplaceById(workplaceId, user.id);

  if (!hasUserWorkplace) {
    return res.status(400).send({ message: 'Workplace does not exist' });
  }

  const isExistBoard = await getIsExistBoardByTitle(boardTitle, workplaceId);

  if (isExistBoard) {
    return res.status(400).send({ message: 'Board with this title is already exist' });
  }

  const { id } = await addBoard(boardTitle, workplaceId, boardOrder);

  return res.status(201).send({
    id,
    boardOrder,
    title: boardTitle,
    workplaceId,
  });
});

boardsRouter.delete('/delete', async (req, res) => {
  const user = await getAuthUser(req);

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const { boardId, workplaceId } = req?.body;

  if (!(boardId && workplaceId)) {
    return res.status(400).send({ message: 'Bad request' });
  }

  const hasUserWorkplace = await getUserWorkplaceById(workplaceId, user.id);

  if (!hasUserWorkplace) {
    return res.status(400).send({ message: 'Workplace does not exist' });
  }

  const isExistBoard = await getIsExistBoardById(boardId, workplaceId);

  if (!isExistBoard) {
    return res.status(400).send({ message: 'Board is not exist' });
  }

  await deleteBoard(boardId);

  return res.status(200).send({ id: boardId });
});
