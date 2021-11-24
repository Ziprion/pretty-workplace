import express from 'express';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import { users } from '../../state.js';
import { TEMP_SECRET_JWT } from '../../constants.js';
import {
  getAuthUser, getUserByEmail,
} from '../../utils.js';

export const authRouter = express.Router();

authRouter.post('/check', (req, res) => {
  const user = getAuthUser(req);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  return res.sendStatus(200);
});

authRouter.post('/signin', (req, res) => {
  const email = _.get(req, 'body.email').toLowerCase();
  const password = _.get(req, 'body.password');

  if (!(email && password)) {
    return res.status(400).send({ message: 'login and password are required' });
  }

  const user = getUserByEmail(email);

  if (!user || user.authInfo.password !== password) {
    return res.status(401).send({ message: 'user does not exist with these login and password' });
  }

  const newToken = jwt.sign({ id: user.id, email: user.authInfo.email }, TEMP_SECRET_JWT);
  user.authInfo.token = newToken;

  return res
    .cookie('token', newToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    })
    .sendStatus(200);
});

authRouter.post('/signup', (req, res) => {
  const email = _.get(req, 'body.email').toLowerCase();
  const firstName = _.get(req, 'body.firstName').toLowerCase();
  const lastName = _.get(req, 'body.lastName').toLowerCase();
  const password = _.get(req, 'body.password');
  const confirm = _.get(req, 'body.confirm');

  if (!(email && password && confirm && lastName && firstName)) {
    return res.status(400).send({ message: 'all inputs are required' });
  }

  if (password !== confirm) {
    return res.status(409).send({ message: 'password and confirm password do not equal' });
  }

  const user = users.find(({ authInfo }) => authInfo.email === email);

  if (user) {
    return res.status(409).send({ message: 'user is already exist' });
  }

  const newUser = {
    id: users.length + 1,
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
      avatar: {
        background: '#ac35ef',
        initials: `${firstName[0]}${lastName[0]}`,
        url: null,
      },
    },
  };

  const token = jwt.sign({ id: newUser.id, email: newUser.authInfo.email }, TEMP_SECRET_JWT);
  newUser.authInfo.token = token;
  users.push(newUser);

  return res
    .cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    })
    .sendStatus(201);
});
