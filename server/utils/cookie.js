const DEFAULT_COOKIE_HEADERS = {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict',
};

export const setTokensToCookie = (res, { accessToken, refreshToken }) => res
  .cookie('accessToken', accessToken, DEFAULT_COOKIE_HEADERS)
  .cookie('refreshToken', refreshToken, DEFAULT_COOKIE_HEADERS);
