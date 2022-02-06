import { ACTUAL_API_VERSION, API } from '../constants/index.js';

export const apiVersionMiddleware = (req, _, next) => {
  if (req.url.slice(0, 4) === API) {
    req.url = ACTUAL_API_VERSION.concat(req.url.slice(4));
  }

  next();
};
