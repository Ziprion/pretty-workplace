import express from 'express';
import { getAuthUser, getLastUsedWorkplaceIdByUser, getWorkplacesByUser } from '../../utils/index.js';

export const workplacesRouter = express.Router();

workplacesRouter.get('/myworkplaces', async (req, res) => {
  const user = getAuthUser(req);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const workplaces = getWorkplacesByUser(user);
  const lastUsedWorkplaceId = getLastUsedWorkplaceIdByUser(user);

  const response = {
    workplaces, lastUsedWorkplaceId,
  };

  return res.status(200).send(response);
});
