export const AUTH_ROUTES = {
  CHECK: '/api/auth/check',
  SIGNIN: '/api/auth/signin',
  SIGNUP: '/api/auth/signup',
  SIGNOUT: '/api/auth/signout',
};

export const CHECK = {
  method: 'get',
  url: AUTH_ROUTES.CHECK,
};

export const SIGNIN = {
  method: 'post',
  url: AUTH_ROUTES.SIGNIN,
};

export const SIGNUP = {
  method: 'post',
  url: AUTH_ROUTES.SIGNUP,
};

export const SIGNOUT = {
  method: 'get',
  url: AUTH_ROUTES.SIGNOUT,
};
