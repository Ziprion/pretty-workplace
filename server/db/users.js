import { db } from './db.js';

export const getUsers = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
