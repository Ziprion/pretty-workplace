import express from 'express';
import { getAuthUser } from '../../utils/index.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  const user = getAuthUser(req);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const response = {
    userInfo: user.userInfo,
  };

  return res.status(200).send(response);
});
