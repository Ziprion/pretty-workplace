import express from 'express';

import {
  addItem,
  deleteItem,
  getBoardWorkplaceId,
  getIsExistItem,
  getUserWorkplaceById,
} from '../../db/index.js';
import { getAuthUser } from '../../utils/index.js';

export const itemsRouter = express.Router();

itemsRouter.post('/add', async (req, res) => {
  const user = await getAuthUser(req);

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const { title, url, boardId } = req?.body;

  if (!(title && url && boardId)) {
    return res.status(400).send({ message: 'Bad request' });
  }

  const workplaceId = await getBoardWorkplaceId(boardId);
  const hasUserWorkplace = await getUserWorkplaceById(workplaceId, user.id);

  if (!hasUserWorkplace) {
    return res.status(400).send({ message: 'Workplace does not exist' });
  }

  const isExistItem = await getIsExistItem(title, url, boardId);

  if (isExistItem) {
    return res.status(400).send({ message: 'Item is already exist' });
  }

  const { id } = await addItem(title, url, boardId);

  return res.status(201).send({
    id,
    title,
    url,
    boardId,
  });
});

itemsRouter.delete('/delete', async (req, res) => {
  // to do check users items
  const user = await getAuthUser(req);

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const { id } = req?.body;

  if (!id) {
    return res.status(400).send({ message: 'Bad request' });
  }

  await deleteItem(id);

  return res.status(200).send({ id });
});
