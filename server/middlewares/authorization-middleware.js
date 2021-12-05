import jwt from 'jsonwebtoken';
import { TEMP_SECRET_JWT, NO_AUTHORIZATION_URL } from '../constants/index.js';

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
    const { id, email } = jwt.verify(token, TEMP_SECRET_JWT);
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch {
    return res.status(401).send({ message: 'user does not exist with these token' });
  }
};
