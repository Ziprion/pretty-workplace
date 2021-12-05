import express from 'express';
import {
  getAuthBodyData,
  generateToken,
  getAuthUserEmail,
  getDefaultAvatar,
  setTokenToCookie,
} from '../../utils/index.js';
import {
  getUser, setToken, createUser, updateToken, clearToken,
} from '../../db/index.js';

export const authRouter = express.Router();

authRouter.get('/check', async (req, res) => {
  const email = getAuthUserEmail(req);
  const user = await getUser(email);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  return res.sendStatus(200);
});

authRouter.get('/signout', async (req, res) => {
  const email = getAuthUserEmail(req);
  const user = await getUser(email);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  await clearToken(user.id);

  return setTokenToCookie(res, null);
});

authRouter.post('/signin', async (req, res) => {
  const { email, password } = getAuthBodyData(req);

  if (!(email && password)) {
    return res.status(400).send({ message: 'login and password are required' });
  }

  const user = await getUser(email);

  if (!user || user.password !== password) {
    return res.status(401).send({ message: 'user does not exist with these login and password' });
  }

  const token = generateToken(user.id, email);

  await updateToken(user.id, token);

  return setTokenToCookie(res, token);
});

authRouter.post('/signup', async (req, res) => {
  const {
    email, firstName, lastName, password, confirm,
  } = getAuthBodyData(req);

  if (!(email && password && confirm && lastName && firstName)) {
    return res.status(400).send({ message: 'all inputs are required' });
  }

  if (password !== confirm) {
    return res.status(409).send({ message: 'password and confirm password do not equal' });
  }

  const user = await getUser(email);

  if (user) {
    return res.status(409).send({ message: 'user is already exist' });
  }

  const { avatarBackground, avatarUrl } = getDefaultAvatar();
  const { id } = await createUser(email, password, lastName, firstName, avatarBackground, avatarUrl);
  const token = generateToken(id, email);

  await setToken(id, token);

  return setTokenToCookie(res, token, 201);
});
