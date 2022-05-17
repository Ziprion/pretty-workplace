export const CHECK = () => ({
  method: 'get',
  url: '/api/auth/check',
});

export const SIGNIN = (data) => ({
  method: 'post',
  url: '/api/auth/signin',
  data,
});

export const SIGNUP = (data) => ({
  method: 'post',
  url: '/api/auth/signup',
  data,
});

export const SIGNOUT = () => ({
  method: 'get',
  url: '/api/auth/signout',
});
