import { DEFAULT_COOKIE_HEADERS, TOKEN_KEY } from '../constants/index.js';

export const setTokenToCookie = (res, token, status = 200) => res
  .cookie(TOKEN_KEY, token, DEFAULT_COOKIE_HEADERS)
  .sendStatus(status);
