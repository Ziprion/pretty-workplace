import express from 'express';

import {
  createUser,
  getToken,
  getUser,
  setToken,
} from '../../db/index.js';
import {
  generateToken,
  getAuthUser,
  getDefaultAvatar,
  setTokenToCookie,
} from '../../utils/index.js';

export const authRouter = express.Router();

authRouter.get('/check', async (req, res) => {
  const user = await getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  return res.sendStatus(200);
});

authRouter.get('/signout', async (req, res) => {
  const user = await getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  return setTokenToCookie(res, null);
});

authRouter.post('/signin', async (req, res) => {
  const email = req?.body?.email.toLowerCase();
  const password = req?.body?.password;

  if (!(email && password)) {
    return res.status(400).send({ message: 'Bad request' });
  }

  const user = await getUser(email);

  if (!user || user.password !== password) {
    return res.status(401).send({ message: 'Password or login is invalid' });
  }

  const { token } = await getToken(user.id);

  return setTokenToCookie(res, token);
});

authRouter.post('/signup', async (req, res) => {
  const {
    email: rawEmail,
    firstName: rawFirstName,
    lastName: rawLastName,
    password,
    confirm,
  } = req?.body;

  const email = rawEmail?.toLowerCase();
  const firstName = rawFirstName?.toLowerCase();
  const lastName = rawLastName?.toLowerCase();

  if (!(email && password && confirm && lastName && firstName)) {
    return res.status(400).send({ message: 'Bad request' });
  }

  if (password !== confirm) {
    return res.status(409).send({ message: 'Passwords do not equal' });
  }

  const user = await getUser(email);

  if (user) {
    return res.status(409).send({ message: 'User is already exist' });
  }

  const { avatarBackground, avatarUrl } = getDefaultAvatar();
  const { id } = await createUser(email, password, lastName, firstName, avatarBackground, avatarUrl);
  const token = generateToken(id, email);

  await setToken(id, token);

  return setTokenToCookie(res, token, 201);
});
