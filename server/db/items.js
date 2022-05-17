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

export const createItem = async ({ title, url, boardId }) => {
  try {
    const { rows } = await db.query(`INSERT INTO items(title, url, board_id) VALUES ('${title}', '${url}', '${boardId}') RETURNING items.id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getItemByTitle = async (title, boardId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM items WHERE title='${title}' AND board_id='${boardId}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getItemByUrl = async (url, boardId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM items WHERE url='${url}' AND board_id='${boardId}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getItemById = async (id) => {
  try {
    const { rows } = await db.query(`SELECT * FROM items WHERE id='${id}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const updateItem = async ({ id, title, url }) => {
  try {
    await db.query(`UPDATE items SET title='${title}', url='${url}' WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteItem = async (id) => {
  try {
    await db.query(`DELETE FROM items WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteItemsByBoardId = async (boardId) => {
  try {
    await db.query(`DELETE FROM items WHERE board_id='${boardId}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
