import bcrypt from 'bcrypt';
import express from 'express';

import {
  createUser,
  getToken,
  getUser,
  setActiveWorkplace,
  setToken,
} from '../../db/index.js';
import {
  generateToken,
  getDefaultAvatar,
  setTokenToCookie,
} from '../../utils/index.js';

export const authRouter = express.Router();

authRouter.get('/check', async (req, res) => {
  const { userEmail } = req;

  const user = await getUser(userEmail);

  if (!user) {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }

  return res.sendStatus(200);
});

authRouter.get('/signout', async (req, res) => {
  const { userEmail } = req;

  const user = await getUser(userEmail);

  if (!user) {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }

  return setTokenToCookie(res, null);
});

authRouter.post('/signin', async (req, res) => {
  const {
    body: {
      email: rawEmail,
      password,
    },
  } = req;
  const email = rawEmail.toLowerCase();

  if (!(email && password)) {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  const user = await getUser(email);
  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!user || !isCorrectPassword) {
    return res.status(401).send({ message: 'SigninError' });
  }

  const { token } = await getToken(user.id);

  return setTokenToCookie(res, token);
});

authRouter.post('/signup', async (req, res) => {
  const {
    body: {
      email: rawEmail,
      firstName: rawFirstName,
      lastName: rawLastName,
      password,
      confirm,
    },
  } = req;

  const email = rawEmail?.toLowerCase();
  const firstName = rawFirstName?.toLowerCase();
  const lastName = rawLastName?.toLowerCase();

  if (!(email && password && confirm && lastName && firstName)) {
    return res.status(400).send({ message: 'BadRequestError' });
  }

  if (password !== confirm) {
    return res.status(400).send({ message: 'PasswordConfirmError' });
  }

  const user = await getUser(email);

  if (user) {
    return res.status(400).send({ message: 'UserSameEmailError' });
  }

  const { avatarBackground, avatarUrl } = getDefaultAvatar();
  const hashPassword = await bcrypt.hash(password, 3);

  const { id } = await createUser({
    email,
    password: hashPassword,
    lastName,
    firstName,
    avatarBackground,
    avatarUrl,
  });
  const token = generateToken(id, email);

  await setToken(id, token);
  await setActiveWorkplace(id);

  return setTokenToCookie(res, token, 201);
});
