import express from 'express';
import { users } from '../../state.js';

export const userRouter = express.Router();

userRouter.get('/me', async (req, res) => {
  const { userId } = req;
  const { userEmail } = req;
  const user = users.find((u) => u.id === userId && u.authInfo.email === userEmail);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const response = {
    userInfo: user.userInfo,
  };

  return res.status(200).send(response);
});
