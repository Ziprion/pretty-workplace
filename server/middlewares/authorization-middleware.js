import { verifyAccessToken } from '../utils/index.js';

const NO_AUTHORIZATION_URL = [ '/api/auth/signin', '/api/auth/signup', '/api/auth/signout', '/api/auth/refresh', '/signin' ];

export const authorizationMiddleware = async (req, res, next) => {
  if (NO_AUTHORIZATION_URL.includes(req.url)) {
    return next();
  }

  const { cookies: { accessToken } } = req;

  if (!accessToken) {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }

  try {
    const { id, email } = verifyAccessToken(accessToken);
    req.userEmail = email;
    req.userId = id;

    return next();
  } catch {
    return res.status(401).send({ message: 'UnauthorizedError' });
  }
};
