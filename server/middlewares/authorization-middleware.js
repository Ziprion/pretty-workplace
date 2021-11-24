import jwt from 'jsonwebtoken';
import { TEMP_SECRET_JWT, NO_AUTHORIZATION_URL } from '../constants.js';

export const authorizationMiddleware = (req, res, next) => {
  if (NO_AUTHORIZATION_URL.includes(req.url)) {
    return next();
  }

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
