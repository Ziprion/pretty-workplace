import { db } from './db.js';

export const getBoards = async (workplaceId) => {
  try {
    const { rows } = await db.query(`SELECT id, title FROM boards WHERE workplace_id='${workplaceId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
