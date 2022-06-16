import express from 'express';
import omit from 'lodash/omit.js';

import {
  createItem,
  deleteItem,
  getActiveWorkplace,
  getBoardById,
  getItemById,
  getItemByTitle,
  getItemByUrl,
  updateItem,
} from '../../db/index.js';
import { toCamelCase } from '../../utils/index.js';

export const itemsRouter = express.Router();

itemsRouter.post('', async (req, res) => {
  const {
    userId,
    body: {
      title: rawTitle,
      url: rawUrl,
      boardId,
    },
  } = req;

  const title = rawTitle?.trim();
  const url = rawUrl?.trim();

  if (!(title && url && boardId)) {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const board = toCamelCase(await getBoardById(boardId));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'BoardNotFoundError' });
  }

  const itemByTitle = await getItemByTitle(title, boardId);

  if (itemByTitle) {
    return res.status(400).send({ message: 'ItemSameTitleError' });
  }

  const itemByUrl = await getItemByUrl(url, boardId);

  if (itemByUrl) {
    return res.status(400).send({ message: 'ItemSameUrlError' });
  }

  const { id } = await createItem({
    title,
    url,
    boardId,
  });

  return res.status(201).send({
    id,
    title,
    url,
    boardId,
  });
});

itemsRouter.patch('/:id', async (req, res) => {
  const {
    userId,
    params: {
      id,
    },
    body: {
      title: rawTitle,
      url: rawUrl,
    },
  } = req;

  const title = rawTitle?.trim();
  const url = rawUrl?.trim();

  if (!id || id === 'null') {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const editedItem = toCamelCase(await getItemById(id));

  if (!editedItem) {
    return res.status(404).send({ message: 'ItemNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;
  const { boardId } = editedItem;

  const board = toCamelCase(await getBoardById(boardId));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'BoardNotFoundError' });
  }

  if (title) {
    const itemByTitle = await getItemByTitle(title, boardId);
    if (itemByTitle && Number(id) !== itemByTitle.id) {
      return res.status(400).send({ message: 'ItemSameTitleError' });
    }
  }

  if (url) {
    const itemByUrl = await getItemByUrl(url, boardId);

    if (itemByUrl && Number(id) !== itemByUrl.id) {
      return res.status(400).send({ message: 'ItemSameUrlError' });
    }
  }

  const updatedItem = {
    ...editedItem,
    ...(title ? { title } : {}),
    ...(url ? { url } : {}),
  };

  await updateItem(updatedItem);

  return res.status(200).send(omit(updatedItem, 'boardId'));
});

itemsRouter.delete('/:id', async (req, res) => {
  const {
    userId,
    params: {
      id,
    },
  } = req;

  if (!id || id === 'null') {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const deletedItem = toCamelCase(await getItemById(id));

  if (!deletedItem) {
    return res.status(404).send({ message: 'ItemNotFoundError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { boardId } = deletedItem;
  const { id: workplaceId } = activeWorkplace;

  const board = toCamelCase(await getBoardById(boardId));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'BoardNotFoundError' });
  }

  await deleteItem(id);

  return res.sendStatus(200);
});
