import { db } from './db.js';

export const getItems = async (boardId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM items WHERE board_id='${boardId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getIsExistItem = async (title, url, boardId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM items WHERE board_id='${boardId}' AND title='${title}' OR board_id='${boardId}' AND url='${url}'`);

    return !!rows.length;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const addItem = async (title, url, boardId) => {
  try {
    const { rows } = await db.query(`INSERT INTO items(title, url, board_id) VALUES ('${title}', '${url}', '${boardId}') RETURNING items.id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteItem = async (id) => {
  try {
    await db.query(`DELETE FROM items WHERE id='${id}' RETURNING items.id`);

    return;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
