import { getUser } from '../db/index.js';

export const getDefaultAvatar = () => ({
  avatarBackground: '#001e51',
  avatarUrl: null,
});

export const getAuthUser = async (req) => {
  const email = req?.userEmail?.toLowerCase();
  const user = await getUser(email);

  return user;
};
