import { users } from './state.js';

export const getReqUserEmail = (req) => req?.userEmail?.toLowerCase();
export const getReqUserId = (req) => req?.userId;
export const getAuthUser = (req) => {
  const userId = getReqUserId(req);
  const userEmail = getReqUserEmail(req);
  users.find(({ id, authInfo: { email } }) => id === userId && email === userEmail);
};

export const getUserByEmail = (userEmail) => users.find(({ authInfo: { email } }) => email === userEmail);
