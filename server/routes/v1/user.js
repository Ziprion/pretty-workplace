import express from 'express';

import { getAuthUser, toCamelCase } from '../../utils/index.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  const user = await getAuthUser(req);

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const {
    lastName, firstName, avatarBackground, avatarUrl,
  } = toCamelCase(user);

  return res.status(200).send({
    lastName,
    firstName,
    avatarBackground,
    avatarUrl,
  });
});
