import express from 'express';
import omit from 'lodash/omit.js';

import {
  clearActiveWorkplace,
  createWorkplace,
  deleteBoardsByWorkplaceId,
  deleteItemsByBoardId,
  deleteWorkplace,
  getActiveWorkplace,
  getBoards,
  getItems,
  getWorkplaceById,
  getWorkplaceByTitle,
  getWorkplaces,
  updateActiveWorkplace,
  updateBoardsPosition,
  updateWorkplace,
} from '../../db/index.js';
import { promise, toCamelCase } from '../../utils/index.js';

export const workplacesRouter = express.Router();

workplacesRouter.get('', async (req, res) => {
  const { userId } = req;

  const rawWorkplaces = await getWorkplaces(userId);

  const workplaces = rawWorkplaces.map((workplace) => omit(workplace, 'boards_position'));

  return res.status(200).send({ workplaces });
});

workplacesRouter.post('', async (req, res) => {
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

  const workplaceByTitle = await getWorkplaceByTitle(title, userId);

  if (workplaceByTitle) {
    return res.status(400).send({ message: 'WorkplaceSameTitleError' });
  }

  const { id } = await createWorkplace({
    title,
    userId,
  });

  await updateActiveWorkplace(id, userId);

  const workplace = {
    id,
    title,
    boardsPosition: [],
  };

  return res.status(201).send({
    workplace,
    boards: [],
    items: [],
  });
});

workplacesRouter.get('/active', async (req, res) => {
  const { userId } = req;
  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace || activeWorkplace.id === null) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const workplace = omit(toCamelCase(await getWorkplaceById(workplaceId)), 'userId');
  const boards = toCamelCase(await getBoards(workplaceId));
  const items = toCamelCase(await promise(boards.map(({ id }) => getItems(id)))).flat();

  return res.status(200).send({
    workplace,
    boards,
    items,
  });
});

workplacesRouter.patch('/active/boardsPosition', async (req, res) => {
  const {
    userId,
    body: {
      boardsPosition,
    },
  } = req;

  if (!Array.isArray(boardsPosition)) {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const formattedBoardsPosition = boardsPosition.map((boardId) => (boardId || 0));

  await updateBoardsPosition(workplaceId, formattedBoardsPosition);

  return res.sendStatus(200);
});

workplacesRouter.patch('/active/change', async (req, res) => {
  const {
    userId,
    body: {
      id,
    },
  } = req;

  if (!id || id === 'null') {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const workplace = toCamelCase(await getWorkplaceById(id));

  if (!workplace || workplace.userId !== userId) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  await updateActiveWorkplace(id, userId);

  const boards = toCamelCase(await getBoards(id));
  const items = toCamelCase(await promise(boards.map(({ id: boardId }) => getItems(boardId)))).flat();

  return res.status(200).send({
    workplace: omit(workplace, 'userId'),
    boards,
    items,
  });
});

workplacesRouter.patch('/active', async (req, res) => {
  const {
    userId,
    body: {
      title: rawTitle,
    },
  } = req;
  const title = rawTitle?.trim();

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const workplace = await getWorkplaceById(workplaceId);

  if (!workplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  if (title) {
    const workplaceByTitle = await getWorkplaceByTitle(title, userId);

    if (workplaceByTitle) {
      return res.status(400).send({ message: 'WorkplaceSameTitleError' });
    }
  }

  const updatedWorkplace = {
    ...workplace,
    ...(title ? { title } : {}),
  };

  await updateWorkplace(updatedWorkplace);

  return res.status(200).send(omit(updatedWorkplace, 'boards_position'));
});

workplacesRouter.delete('/active', async (req, res) => {
  const { userId } = req;

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'WorkplaceNotFoundError' });
  }

  const { id: deletedWorkplaceId } = activeWorkplace;

  await deleteWorkplace(deletedWorkplaceId);
  const deletedBoards = await deleteBoardsByWorkplaceId(deletedWorkplaceId);
  await promise(deletedBoards.map(({ id }) => deleteItemsByBoardId(id)));

  const workplaces = toCamelCase(await getWorkplaces(userId));

  const updatedWorkplaces = workplaces.filter(({ id }) => id !== Number(deletedWorkplaceId));

  if (!updatedWorkplaces.length) {
    await clearActiveWorkplace(userId);

    return res.status(200).send({
      workplace: {},
      boards: [],
      items: [],
    });
  }

  const { id, title, boardsPosition } = updatedWorkplaces[0];

  await updateActiveWorkplace(id, userId);

  const workplace = {
    id,
    title,
    boardsPosition,
  };
  const boards = toCamelCase(await getBoards(id));
  const items = toCamelCase(await promise(boards.map(({ id: boardId }) => getItems(boardId)))).flat();

  return res.status(200).send({
    workplace,
    boards,
    items,
  });
});
