import express from 'express';
import { DEFAULT_COOKIE_HEADERS, TOKEN_KEY } from '../../constants/index.js';
import {
  getAuthUser,
  getAuthBodyData,
  getUserByEmail,
  setDefaultAvatar,
  addNewUser,
  getNewUserId,
  getToken,
} from '../../utils/index.js';

export const authRouter = express.Router();

authRouter.get('/check', async (req, res) => {
  const user = getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  return res.sendStatus(200);
});

authRouter.get('/signout', (req, res) => {
  const user = getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  return res
    .cookie(TOKEN_KEY, null, DEFAULT_COOKIE_HEADERS)
    .sendStatus(200);
});

authRouter.post('/signin', (req, res) => {
  const { email, password } = getAuthBodyData(req);

  if (!(email && password)) {
    return res.status(400).send({ message: 'login and password are required' });
  }

  const user = getUserByEmail(email);

  if (!user || user.authInfo?.password !== password) {
    return res.status(401).send({ message: 'user does not exist with these login and password' });
  }

  const newToken = getToken(user.id, email);
  user.authInfo.token = newToken;

  return res
    .cookie(TOKEN_KEY, newToken, DEFAULT_COOKIE_HEADERS)
    .sendStatus(200);
});

authRouter.post('/signup', (req, res) => {
  const {
    email, firstName, lastName, password, confirm,
  } = getAuthBodyData(req);

  if (!(email && password && confirm && lastName && firstName)) {
    return res.status(400).send({ message: 'all inputs are required' });
  }

  if (password !== confirm) {
    return res.status(409).send({ message: 'password and confirm password do not equal' });
  }

  const user = getUserByEmail(email);

  if (user) {
    return res.status(409).send({ message: 'user is already exist' });
  }

  const newUser = {
    id: getNewUserId(),
    authInfo: {
      email,
      password,
      token: null,
    },
    workplacesInfo: {
      workplacesId: [],
      lastUsedWorkplaceId: null,
    },
    userInfo: {
      lastName,
      firstName,
      avatar: setDefaultAvatar(),
    },
  };

  const newToken = getToken(newUser.id, email);
  newUser.authInfo.token = newToken;

  addNewUser(newUser);

  return res
    .cookie('token', newToken, DEFAULT_COOKIE_HEADERS)
    .sendStatus(201);
});
