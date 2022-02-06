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

export const getUserWorkplaceById = async (workplaceId, userId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM workplaces WHERE user_id='${userId}' AND id='${workplaceId}'`);

    return !!rows.length;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
