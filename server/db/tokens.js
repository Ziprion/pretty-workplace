import { db } from './db.js';

export const updateToken = async (userId, token) => {
  try {
    await db.query(`UPDATE tokens SET token='${token}' WHERE user_id=${userId}`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const setToken = async (userId, token) => {
  try {
    await db.query(`INSERT INTO tokens(user_id, token) VALUES (${userId}, '${token}')`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const clearToken = async (userId) => {
  try {
    await db.query(`UPDATE tokens SET token=null WHERE user_id=${userId}`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
