import express from 'express';

import {
  getBoards,
  getItems,
  getWorkplaces,
} from '../../db/index.js';
import {
  getAuthUser,
  promise,
  toCamelCase,
} from '../../utils/index.js';

export const workplacesRouter = express.Router();

workplacesRouter.get('/myworkplaces', async (req, res) => {
  const user = await getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const workplaces = await getWorkplaces(user.id);
  const boards = toCamelCase((await promise(workplaces.map(({ id }) => getBoards(id)))).flat());
  const items = toCamelCase((await promise(boards.map(({ id }) => getItems(id)))).flat());

  return res.status(200).send({
    workplaces,
    boards,
    items,
  });
});
