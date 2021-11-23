import _ from 'lodash';
import jwt from 'jsonwebtoken';
import express from 'express';
import { users, workplaces } from './state.js';

export const router = express.Router();

const TEMP_SECRET_JWT = 'asdqwezxc';

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  try {
    const data = jwt.verify(token, TEMP_SECRET_JWT);
    req.userId = data.id;
    req.userEmail = data.email;

    return next();
  } catch {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }
};

router.post('/auth/check', authorization, (req, res) => {
  const userId = _.get(req, 'userId');
  const userEmail = _.get(req, 'userEmail').toLowerCase();
  const user = users.find(({ id, authInfo: { email } }) => id === userId && email === userEmail);

  if (!(user)) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  return res.sendStatus(200);
});

router.post('/auth/signin', (req, res) => {
  const email = _.get(req, 'body.email').toLowerCase();
  const password = _.get(req, 'body.password');

  if (!(email && password)) {
    return res.status(400).send({ message: 'login and password are required' });
  }

  const user = users.find(({ authInfo }) => authInfo.email === email);

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

router.post('/auth/signup', (req, res) => {
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

router.get('/users/me', authorization, async (req, res) => {
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

router.get('/workplaces', authorization, async (req, res) => {
  const { userId } = req;
  const { userEmail } = req;
  const user = users.find((u) => u.id === userId && u.authInfo.email === userEmail);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const userWorkplaces = user.workplacesInfo.workplacesId
    .map((workplaceId) => workplaces.find(({ id }) => id === workplaceId));

  const response = {
    workplaces: userWorkplaces, lastUsedWorkplaceId: user.workplacesInfo.lastUsedWorkplaceId,
  };

  return res.status(200).send(response);
});
