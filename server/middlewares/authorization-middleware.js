import { API, NO_AUTHORIZATION_URL } from '../constants/index.js';
import { verifyAccessToken } from '../utils/index.js';

export const authorizationMiddleware = async (req, res, next) => {
  if (NO_AUTHORIZATION_URL.includes(req.url) || !(req.url).includes(API)) {
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
