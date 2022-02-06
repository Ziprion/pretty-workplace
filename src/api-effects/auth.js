export const AUTH_ROUTES = {
  CHECK: '/api/auth/check',
  SIGNIN: '/api/auth/signin',
  SIGNUP: '/api/auth/signup',
  SIGNOUT: '/api/auth/signout',
};

export const CHECK = () => ({
  method: 'get',
  url: AUTH_ROUTES.CHECK,
});

export const SIGNIN = (data) => ({
  method: 'post',
  url: AUTH_ROUTES.SIGNIN,
  data,
});

export const SIGNUP = (data) => ({
  method: 'post',
  url: AUTH_ROUTES.SIGNUP,
  data,
});

export const SIGNOUT = () => ({
  method: 'get',
  url: AUTH_ROUTES.SIGNOUT,
});
