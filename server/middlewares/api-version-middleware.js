import { API } from '../constants/index.js';

export const apiVersionMiddleware = (req, _, next) => {
  if (req.url.slice(0, 4) === API) {
    req.url = `${API}${process.env.API_VERSION.concat(req.url.slice(4))}`;
  }

  next();
};
