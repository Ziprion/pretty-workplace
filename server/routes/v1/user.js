import express from 'express';
import { getUser } from '../../db/users.js';
import { getAuthUserEmail, toCamelCase } from '../../utils/index.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  const email = getAuthUserEmail(req);
  const user = await getUser(email);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const {
    lastName, firstName, avatarBackground, avatarUrl,
  } = toCamelCase(user);

  return res.status(200).send({
    lastName, firstName, avatarBackground, avatarUrl,
  });
});
