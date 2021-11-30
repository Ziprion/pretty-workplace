import { users } from '../state.js';

export const getUserByEmail = (userEmail) => users.find(({ authInfo: { email } }) => email === userEmail);

export const getNewUserId = () => users.length + 1;

export const addNewUser = (newUser) => users.push(newUser);
