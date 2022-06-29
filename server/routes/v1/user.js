import express from 'express';
import omit from 'lodash/omit.js';

import { getUser } from '../../db/users.js';
import { toCamelCase } from '../../utils/index.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  const { userEmail } = req;

  const user = toCamelCase(await getUser(userEmail));

  if (!user) {
    return res.status(401).send({ message: 'unauthorizedError' });
  }

  return res.status(200).send(omit(user, [ 'id', 'password', 'email' ]));
});
