import express from 'express';
import omit from 'lodash/omit.js';

import {
  addItemPosition,
  createItem,
  deleteItem,
  deleteItemPosition,
  getActiveWorkplace,
  getBoardById,
  getItemById,
  getItemByTitle,
  getItemByUrl,
  updateItem,
} from '../../db/index.js';
import { downloadIcon, internalErrorHandler, toCamelCase } from '../../utils/index.js';

export const itemsRouter = express.Router();

itemsRouter.post('', async (req, res) => {
  try {
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
      return res.status(400).send({ message: 'badRequestError' });
    }

    const activeWorkplace = await getActiveWorkplace(userId);

    if (!activeWorkplace) {
      return res.status(404).send({ message: 'workplaceNotFoundError' });
    }

    const { id: workplaceId } = activeWorkplace;

    const board = toCamelCase(await getBoardById(boardId));

    if (!(board && board.workplaceId === workplaceId)) {
      return res.status(404).send({ message: 'boardNotFoundError' });
    }

    const itemByTitle = await getItemByTitle(title, boardId);

    if (itemByTitle) {
      return res.status(400).send({ message: 'itemSameTitleError' });
    }

    const itemByUrl = await getItemByUrl(url, boardId);

    if (itemByUrl) {
      return res.status(400).send({ message: 'itemSameUrlError' });
    }

    const pathToIcon = await downloadIcon(url);

    const { id } = await createItem({
      title,
      url,
      boardId,
      pathToIcon,
    });

    await addItemPosition(id, boardId);

    return res.status(201).send({
      id,
      title,
      url,
      boardId,
      pathToIcon,
    });
  } catch (e) {
    internalErrorHandler(res, e);
  }
});

itemsRouter.patch('/:id', async (req, res) => {
  try {
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
      return res.status(400).send({ message: 'badRequestError' });
    }

    const activeWorkplace = await getActiveWorkplace(userId);

    if (!activeWorkplace) {
      return res.status(404).send({ message: 'workplaceNotFoundError' });
    }

    const editedItem = toCamelCase(await getItemById(id));

    if (!editedItem) {
      return res.status(404).send({ message: 'itemNotFoundError' });
    }

    const { id: workplaceId } = activeWorkplace;
    const { boardId } = editedItem;

    const board = toCamelCase(await getBoardById(boardId));

    if (!(board && board.workplaceId === workplaceId)) {
      return res.status(404).send({ message: 'boardNotFoundError' });
    }

    if (title) {
      const itemByTitle = await getItemByTitle(title, boardId);
      if (itemByTitle && Number(id) !== itemByTitle.id) {
        return res.status(400).send({ message: 'itemSameTitleError' });
      }
    }

    if (url) {
      const itemByUrl = await getItemByUrl(url, boardId);

      if (itemByUrl && Number(id) !== itemByUrl.id) {
        return res.status(400).send({ message: 'itemSameUrlError' });
      }
    }

    const pathToIcon = url ? await downloadIcon(url) : '';

    const updatedItem = {
      ...editedItem,
      ...(title ? { title } : {}),
      ...(url ? { url } : {}),
      ...(url ? { pathToIcon } : {}),
    };

    await updateItem(updatedItem);

    return res.status(200).send(omit(updatedItem, 'boardId'));
  } catch (e) {
    internalErrorHandler(res, e);
  }
});

itemsRouter.delete('/:id', async (req, res) => {
  try {
    const {
      userId,
      params: {
        id,
      },
    } = req;

    if (!id || id === 'null') {
      return res.status(400).send({ message: 'badRequestError' });
    }

    const deletedItem = toCamelCase(await getItemById(id));

    if (!deletedItem) {
      return res.status(404).send({ message: 'itemNotFoundError' });
    }

    const activeWorkplace = await getActiveWorkplace(userId);

    if (!activeWorkplace) {
      return res.status(404).send({ message: 'workplaceNotFoundError' });
    }

    const { boardId } = deletedItem;
    const { id: workplaceId } = activeWorkplace;

    const board = toCamelCase(await getBoardById(boardId));

    if (!(board && board.workplaceId === workplaceId)) {
      return res.status(404).send({ message: 'boardNotFoundError' });
    }

    await deleteItem(id);
    await deleteItemPosition(id, boardId);

    return res.sendStatus(200);
  } catch (e) {
    internalErrorHandler(res, e);
  }
});
