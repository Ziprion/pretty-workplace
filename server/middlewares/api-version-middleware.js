import { ACTUAL_API_VERSION } from '../constants.js';

export const apiVersionMiddleware = (req, res, next) => {
  if (req.url.slice(0, 4) === '/api') {
    req.url = ACTUAL_API_VERSION.concat(req.url.slice(4));
  }

  next();
};
