import express from 'express';
import { getAuthUserEmail, promise } from '../../utils/index.js';
import { getUser } from '../../db/users.js';
import { getWorkplaces, getBoards, getItems } from '../../db/index.js';

export const workplacesRouter = express.Router();

workplacesRouter.get('/myworkplaces', async (req, res) => {
  const email = getAuthUserEmail(req);
  const user = await getUser(email);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const workplacesList = await getWorkplaces(user.id);
  const workplacesWithBoards = workplacesList.map(async (workplace) => {
    const boardsList = await getBoards(workplace.id);
    const boardsWithItems = boardsList.map(async (board) => ({ ...board, items: await getItems(board.id) }));

    return promise(boardsWithItems).then((boards) => ({ ...workplace, boards }));
  });

  return promise(workplacesWithBoards).then((workplaces) => res.status(200).send(workplaces));
});
