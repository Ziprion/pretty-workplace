export const API_VERSION_1 = '/v1';

export const API = '/api';

export const ACTUAL_API_VERSION = API_VERSION_1;

export const NO_AUTHORIZATION_URL = [ '/api/auth/signin', '/api/auth/signup' ];

export const DEFAULT_COOKIE_HEADERS = {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict',
};

export const TOKEN_KEY = 'token';
