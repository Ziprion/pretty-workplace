import { ACTUAL_API_VERSION } from '../constants/index.js';

export const apiVersionMiddleware = (req, res, next) => {
  if (req.url.slice(0, 4) === '/api') {
    console.log('request to ', req.url);
    req.url = ACTUAL_API_VERSION.concat(req.url.slice(4));
    console.log('rewrite to ', req.url);
  }

  next();
};
