export const AUTH_ROUTES = {
  CHECK: '/api/v1/auth/check',
  SIGNIN: '/api/v1/auth/signin',
  SIGNUP: '/api/v1/auth/signup',
};

export const CHECK = {
  method: 'post',
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
