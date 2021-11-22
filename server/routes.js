import _ from 'lodash';
import jwt from 'jsonwebtoken';
import express from 'express';
import { users, workplaces } from './state.js';

export const router = express.Router();

const TEMP_USER_ID = 1;

router.post('/auth/check', (req, res) => {
  const token = _.get(req, 'body.token');
  const user = users.find(({ authInfo }) => authInfo.token === token);

  if (!(token && user)) {
    res.status(401).send('user does not exist with these token');
    return;
  }

  const response = {
    token,
  };

  res.status(200).send(_.omit(response));
});

router.post('/auth/signin', (req, res) => {
  const email = _.get(req, 'body.email').toLowerCase();
  const password = _.get(req, 'body.password');

  if (!(email && password)) {
    res.status(400).send('login and password are required');
    return;
  }

  const user = users.find(({ authInfo }) => authInfo.email === email);

  if (!user || user.authInfo.password !== password) {
    res.status(401).send({ message: 'user does not exist with these login and password' });
    return;
  }

  const response = {
    token: user.authInfo.token,
  };

  res.status(200).send(response);
});

router.post('/auth/signup', (req, res) => {
  const email = _.get(req, 'body.email').toLowerCase();
  const firstName = _.get(req, 'body.firstName').toLowerCase();
  const lastName = _.get(req, 'body.lastName').toLowerCase();
  const password = _.get(req, 'body.password');
  const confirm = _.get(req, 'body.confirm');

  if (!(email && password && confirm && lastName && firstName)) {
    res.status(400).send('all inputs are required');
    return;
  }

  if (password !== confirm) {
    res.status(409).send('password and confirm password do not equal');
    return;
  }

  const user = users.find(({ authInfo }) => authInfo.email === email);

  if (user) {
    res.status(409).send('user is already exist');
    return;
  }

  const newUser = {
    id: users.length + 1,
    authInfo: {
      email,
      password,
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

  const token = jwt.sign({ id: newUser.id, email }, 'shhhhh');
  newUser.authInfo.token = token;
  users.push(newUser);

  const response = { token };

  res.status(201).send(response);
});

router.get('/users/me', async (req, res) => {
  const user = users.find((u) => u.id === TEMP_USER_ID);

  if (!user) {
    res.status(404).send('user does not exist');
    return;
  }

  const response = {
    userId: TEMP_USER_ID, userInfo: user.userInfo,
  };

  res.status(200).send(response);
});

router.get('/workplaces', async (req, res) => {
  const user = users.find((u) => u.id === TEMP_USER_ID);

  if (!user) {
    res.status(404).send('user does not exist');
    return;
  }

  const userWorkplaces = user.workplacesInfo.workplacesId
    .map((workplaceId) => workplaces.find(({ id }) => id === workplaceId));

  const response = {
    workplaces: userWorkplaces, lastUsedWorkplaceId: user.workplacesInfo.lastUsedWorkplaceId,
  };

  res.status(200).send(response);
});
