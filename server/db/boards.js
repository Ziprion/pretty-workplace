import { db } from './db.js';

export const getBoards = async (workplaceId) => {
  const { rows } = await db.query(`SELECT id, title FROM boards WHERE workplace_id='${workplaceId}'`);

  return rows;
};

export const getBoardById = async (id) => {
  const { rows } = await db.query(`SELECT * FROM boards WHERE id='${id}'`);

  return rows[0];
};

export const getBoardByTitle = async (title, workplaceId) => {
  const { rows } = await db.query(`SELECT * FROM boards WHERE title='${title}' AND workplace_id='${workplaceId}'`);

  return rows[0];
};

export const createBoard = async ({ title, workplaceId }) => {
  const { rows } = await db.query(`INSERT INTO boards(title, workplace_id) VALUES ('${title}', '${workplaceId}') RETURNING boards.id`);

  return rows[0];
};

export const updateBoard = async ({ id, title }) => {
  await db.query(`UPDATE boards SET title='${title}' WHERE id='${id}'`);
};

export const deleteBoard = async (id) => {
  await db.query(`DELETE FROM boards WHERE id='${id}'`);
};

export const deleteBoardsByWorkplaceId = async (workplaceId) => {
  const { rows } = await db.query(`DELETE FROM boards WHERE workplace_id='${workplaceId}' RETURNING id`);

  return rows;
};
