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
  });
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

boardsRouter.patch('/itemsPosition', async (req, res) => {
  const {
    userId,
    body: {
      source: {
        boardId: sourceBoardId,
        itemsPosition: sourceItemsPosition,
      },
      destination: {
        boardId: destinationBoardId,
        itemsPosition: destinationItemsPosition,
      },
    },
  } = req;

  if (
    !Array.isArray(sourceItemsPosition)
      || !Array.isArray(destinationItemsPosition)
      || !sourceBoardId
      || !destinationBoardId
  ) {
    return res.status(400).send({ message: 'badRequestError' });
  }

  const activeWorkplace = await getActiveWorkplace(userId);

  if (!activeWorkplace) {
    return res.status(404).send({ message: 'workplaceNotFoundError' });
  }

  const { id: workplaceId } = activeWorkplace;

  const sourceBoard = await getBoardById(sourceBoardId);
  const destinationBoard = await getBoardById(destinationBoardId);

  if (
    !(sourceBoard && sourceBoard.workplaceId === workplaceId)
      || !(destinationBoard && destinationBoard.workplaceId === workplaceId)
  ) {
    return res.status(404).send({ message: 'boardNotFoundError' });
  }

  const updatedSourceItemsPosition = toCamelCase(await updateItemsPosition(
    sourceBoardId, sourceItemsPosition,
  ));
  const updatedDestinationItemsPosition = toCamelCase(await updateItemsPosition(
    destinationBoardId, destinationItemsPosition,
  ));

  return res.status(200).send({
    source: {
      boardId: sourceBoardId,
      itemsPosition: updatedSourceItemsPosition,
    },
    destination: {
      boardId: destinationBoardId,
      itemsPosition: updatedDestinationItemsPosition,
    },
  });
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
