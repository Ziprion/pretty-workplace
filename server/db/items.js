import { db } from './db.js';

export const getItems = async (boardId) => {
  const { rows } = await db.query(`SELECT * FROM items WHERE board_id='${boardId}'`);

  return rows;
};

export const createItem = async ({
  title, url, boardId, pathToIcon,
}) => {
  const { rows } = await db.query(`INSERT INTO items(title, url, board_id, path_to_icon) VALUES ('${title}', '${url}', '${boardId}', '${pathToIcon}') RETURNING items.id`);

  return rows[0];
};

export const getItemByTitle = async (title, boardId) => {
  const { rows } = await db.query(`SELECT * FROM items WHERE title='${title}' AND board_id='${boardId}'`);

  return rows[0];
};

export const getItemByUrl = async (url, boardId) => {
  const { rows } = await db.query(`SELECT * FROM items WHERE url='${url}' AND board_id='${boardId}'`);

  return rows[0];
};

export const getItemById = async (id) => {
  const { rows } = await db.query(`SELECT * FROM items WHERE id='${id}'`);

  return rows[0];
};

export const updateItem = async ({
  id, title, url, pathToIcon,
}) => {
  await db.query(`UPDATE items SET title='${title}', url='${url}', path_to_icon='${pathToIcon}' WHERE id='${id}'`);
};

export const deleteItem = async (id) => {
  await db.query(`DELETE FROM items WHERE id='${id}'`);
};

export const deleteItemsByBoardId = async (boardId) => {
  await db.query(`DELETE FROM items WHERE board_id='${boardId}'`);
};
