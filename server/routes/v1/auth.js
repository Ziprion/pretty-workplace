import bcrypt from 'bcrypt';
import express from 'express';

import {
  createUser,
  getUser,
  setActiveWorkplace,
} from '../../db/index.js';
import {
  generateTokens,
  getDefaultAvatar,
  setTokensToCookie,
  verifyRefreshToken,
} from '../../utils/index.js';

export const authRouter = express.Router();

authRouter.get('/check', async (_, res) => res.sendStatus(200));

authRouter.get('/refresh', async (req, res) => {
  const { cookies: { refreshToken } } = req;

  if (!refreshToken) {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }

  try {
    const { id, email } = verifyRefreshToken(refreshToken);
    const tokens = generateTokens(id, email);

    return setTokensToCookie(res, tokens);
  } catch {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }
});

authRouter.get('/signout', async (_, res) => res
  .clearCookie('refreshToken')
  .clearCookie('accessToken')
  .sendStatus(200));

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
    return res.status(403).send({ message: 'SigninError' });
  }

  const tokens = generateTokens(user.id, email);

  return setTokensToCookie(res, tokens);
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

  const tokens = generateTokens(id, email);

  await setActiveWorkplace(id);

  return setTokensToCookie(res, tokens, 201);
});
