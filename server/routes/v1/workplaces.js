import express from 'express';
import { users, workplaces } from '../../state.js';

export const workplacesRouter = express.Router();

workplacesRouter.get('/myworkplaces', async (req, res) => {
  const { userId } = req;
  const { userEmail } = req;
  const user = users.find((u) => u.id === userId && u.authInfo.email === userEmail);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const userWorkplaces = user.workplacesInfo.workplacesId
    .map((workplaceId) => workplaces.find(({ id }) => id === workplaceId));

  const response = {
    workplaces: userWorkplaces, lastUsedWorkplaceId: user.workplacesInfo.lastUsedWorkplaceId,
  };

  return res.status(200).send(response);
});