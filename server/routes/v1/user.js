import express from 'express';
import omit from 'lodash/omit.js';

import { getUser } from '../../db/users.js';
import { internalErrorHandler, toCamelCase } from '../../utils/index.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  try {
    const { userEmail } = req;

    const user = toCamelCase(await getUser(userEmail));

    if (!user) {
      return res.status(404).send({ message: 'userNotFoundError' });
    }

    return res.status(200).send(omit(user, [ 'id', 'password', 'email' ]));
  } catch (e) {
    internalErrorHandler(res, e);
  }
});
