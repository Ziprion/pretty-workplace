import express from 'express';
import omit from 'lodash/omit.js';

import {
  addBoardPosition,
  createBoard,
  deleteBoard,
  deleteBoardPosition,
  deleteItemsByBoardId,
  getActiveWorkplace,
  getBoardById,
  getBoardByTitle,
  updateBoard,
  updateItemsPosition,
} from '../../db/index.js';
import { toCamelCase } from '../../utils/index.js';

export const boardsRouter = express.Router();

boardsRouter.post('', async (req, res) => {
  const {
    userId,
    body: {
      title: rawTitle,
    },
  } = req;
  const title = rawTitle?.trim();

  if (!title) {
    return res.status(400).send({ message: 'badRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'workplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const boardByTitle = await getBoardByTitle(title, workplaceId);

  if (boardByTitle) {
    return res.status(400).send({ message: 'boardSameTitleError' });
  }

  const { id } = await createBoard({
    title,
    workplaceId,
  });

  await addBoardPosition(id, workplaceId);

  return res.status(201).send({
    id,
    title,
    itemsPosition: [],
  });
});

boardsRouter.patch('/:id/itemsPosition', async (req, res) => {
  const {
    userId,
    params: {
      id,
    },
    body: itemsPosition,
  } = req;

  if (!Array.isArray(itemsPosition) || !id || id === 'null') {
    return res.status(400).send({ message: 'badRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'workplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const currentBoard = toCamelCase(await getBoardById(id));

  if (!(currentBoard && currentBoard.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'boardNotFoundError' });
  }

  const { itemsPosition: updatedItemsPosition } = toCamelCase(await updateItemsPosition(id, itemsPosition));

  return res.status(200).send(updatedItemsPosition);
});

boardsRouter.patch('/:id', async (req, res) => {
  const {
    userId,
    params: {
      id,
    },
    body: {
      title: rawTitle,
    },
  } = req;
  const title = rawTitle?.trim();

  if (!id || id === 'null') {
    return res.status(400).send({ message: 'badRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'workplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const board = toCamelCase(await getBoardById(id));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'boardNotFoundError' });
  }

  if (title) {
    const boardByTitle = await getBoardByTitle(title, workplaceId);

    if (boardByTitle) {
      return res.status(400).send({ message: 'boardSameTitleError' });
    }
  }

  const updatedBoard = {
    ...board,
    ...(title ? { title } : {}),
  };

  await updateBoard(updatedBoard);

  return res.status(200).send((omit(updatedBoard, 'workplace_id')));
});

boardsRouter.delete('/:id', async (req, res) => {
  const {
    userId,
    params: {
      id: deletedBoardId,
    },
  } = req;

  if (!deletedBoardId || deletedBoardId === 'null') {
    return res.status(400).send({ message: 'badRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'workplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const board = toCamelCase(await getBoardById(deletedBoardId));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'boardNotFoundError' });
  }

  await deleteBoard(deletedBoardId);
  await deleteBoardPosition(deletedBoardId, workplaceId);
  await deleteItemsByBoardId(deletedBoardId);

  return res.sendStatus(200);
});
