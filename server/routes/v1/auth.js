import bcrypt from 'bcrypt';
import express from 'express';
import omit from 'lodash/omit.js';

import {
  createUser,
  getUser,
  setActiveWorkplace,
} from '../../db/index.js';
import {
  generateTokens,
  getDefaultAvatar,
  internalErrorHandler,
  setTokensToCookie,
  toCamelCase,
  verifyRefreshToken,
} from '../../utils/index.js';

export const authRouter = express.Router();

authRouter.get('/refresh', async (req, res) => {
  try {
    const { cookies: { refreshToken } } = req;

    if (!refreshToken) {
      return res.status(401).send({ message: 'unauthorizedError' });
    }

    try {
      const { id, email } = verifyRefreshToken(refreshToken);
      const tokens = generateTokens(id, email);

      return setTokensToCookie(res, tokens).sendStatus(200);
    } catch {
      return res.status(401).send({ message: 'unauthorizedError' });
    }
  } catch (e) {
    internalErrorHandler(res, e);
  }
});

authRouter.get('/signout', async (_, res) => res
  .clearCookie('refreshToken')
  .clearCookie('accessToken')
  .sendStatus(200));

authRouter.post('/signin', async (req, res) => {
  try {
    const {
      body: {
        email: rawEmail,
        password,
      },
    } = req;
    const email = rawEmail.toLowerCase().trim();

    if (!(email && password)) {
      return res.status(400).send({ message: 'badRequestError' });
    }

    const user = toCamelCase(await getUser(email));
    const isCorrectPassword = await bcrypt.compare(password, user?.password || '');

    if (!user || !isCorrectPassword) {
      return res.status(404).send({ message: 'signinError' });
    }

    const tokens = generateTokens(user.id, email);

    return setTokensToCookie(res, tokens)
      .status(200)
      .send(omit(user, [ 'id', 'password', 'email' ]));
  } catch (e) {
    internalErrorHandler(res, e);
  }
});

authRouter.post('/signup', async (req, res) => {
  try {
    const {
      body: {
        email: rawEmail,
        firstName: rawFirstName,
        lastName: rawLastName,
        password,
        confirm,
      },
    } = req;

    const email = rawEmail?.toLowerCase().trim();
    const firstName = rawFirstName?.toLowerCase().trim();
    const lastName = rawLastName?.toLowerCase().trim();

    if (!(email && password && confirm && lastName && firstName)) {
      return res.status(400).send({ message: 'badRequestError' });
    }

    if (password !== confirm) {
      return res.status(400).send({ message: 'passwordConfirmError' });
    }

    const sameUser = await getUser(email);

    if (sameUser) {
      return res.status(400).send({ message: 'userSameEmailError' });
    }

    const { avatarBackground, avatarUrl } = getDefaultAvatar();
    const hashPassword = await bcrypt.hash(password, 3);

    const newUser = {
      email,
      password: hashPassword,
      lastName,
      firstName,
      avatarBackground,
      avatarUrl,
    };

    const { id } = await createUser(newUser);

    const tokens = generateTokens(id, email);

    await setActiveWorkplace(id);

    return setTokensToCookie(res, tokens)
      .status(201)
      .send(omit(newUser, [ 'id', 'password', 'email' ]));
  } catch (e) {
    internalErrorHandler(res, e);
  }
});
