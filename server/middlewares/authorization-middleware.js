import { verifyToken } from '../utils/index.js';
import { NO_AUTHORIZATION_URL } from '../constants/index.js';

export const authorizationMiddleware = (req, res, next) => {
  if (!(req.url.slice(0, 4) === '/api')) {
    return next();
  }

  if (NO_AUTHORIZATION_URL.includes(req.url)) {
    return next();
  }

  const { cookies: { token } } = req;

  if (!token) {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }

  try {
    const { email } = verifyToken(token);
    req.userEmail = email;

    return next();
  } catch {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }
};
