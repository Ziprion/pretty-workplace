import express from 'express';
import omit from 'lodash/omit.js';

import {
  addBoardsPosition,
  createBoard,
  deleteBoard,
  deleteBoardPosition,
  getActiveWorkplace,
  getBoardById,
  getBoardByTitle,
  updateBoard,
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
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const boardByTitle = await getBoardByTitle(title, workplaceId);

  if (boardByTitle) {
    return res.status(400).send({ message: 'BoardSameTitleError' });
  }

  const { id } = await createBoard({
    title,
    workplaceId,
  });

  await addBoardsPosition(id, workplaceId);

  return res.status(201).send({
    id,
    title,
  });
});

boardsRouter.put('/:id', async (req, res) => {
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
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const board = await getBoardById(id);

  if (!board) {
    return res.status(404).send({ message: 'BoardNotFoundError' });
  }

  if (title) {
    const boardByTitle = await getBoardByTitle(title, workplaceId);

    if (boardByTitle) {
      return res.status(400).send({ message: 'BoardSameTitleError' });
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
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const board = toCamelCase(await getBoardById(deletedBoardId));

  if (!(board && board.workplaceId === workplaceId)) {
    return res.status(404).send({ message: 'BoardNotFoundError' });
  }

  await deleteBoard(deletedBoardId);
  await deleteBoardPosition(deletedBoardId, workplaceId);

  return res.sendStatus(200);
});
