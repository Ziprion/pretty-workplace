import { users } from '../state.js';

export const getAuthUser = (req) => {
  const { userEmail, userId } = req;

  return users.find(({ id, authInfo: { email } }) => id === userId && email === userEmail?.toLowerCase());
};

export const getAuthBodyData = (req) => {
  if (req?.body) {
    const {
      email, password, firstName, lastName, confirm,
    } = req.body;

    return {
      email: email?.toLowerCase(),
      password,
      firstName: firstName?.toLowerCase(),
      lastName: lastName?.toLowerCase(),
      confirm,
    };
  }

  return {};
};

export const setDefaultAvatar = () => ({
  background: '#001e51',
  url: null,
});
