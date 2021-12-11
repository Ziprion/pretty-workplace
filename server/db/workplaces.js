import { db } from './db.js';

export const getWorkplaces = async (userId) => {
  try {
    const { rows } = await db.query(`SELECT id, title FROM workplaces WHERE user_id='${userId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
