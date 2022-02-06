import { API, NO_AUTHORIZATION_URL } from '../constants/index.js';
import { verifyToken } from '../utils/index.js';

export const authorizationMiddleware = (req, res, next) => {
  if (!(req.url.slice(0, 4) === API)) {
    return next();
  }

  if (NO_AUTHORIZATION_URL.includes(req.url)) {
    return next();
  }

  const { cookies: { token } } = req;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    const { email } = verifyToken(token);
    req.userEmail = email;

    return next();
  } catch {
    return res.status(401).send({ message: 'Token is invalid' });
  }
};
