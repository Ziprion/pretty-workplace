import { db } from './db.js';

export const setToken = async (userId, token) => {
  try {
    await db.query(`INSERT INTO tokens(user_id, token) VALUES (${userId}, '${token}')`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getToken = async (userId) => {
  try {
    const { rows } = await db.query(`SELECT token FROM tokens WHERE user_id=${userId}`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
