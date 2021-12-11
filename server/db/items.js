import { db } from './db.js';

export const getItems = async (boardId) => {
  try {
    const { rows } = await db.query(`SELECT id, title, url FROM items WHERE board_id='${boardId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
