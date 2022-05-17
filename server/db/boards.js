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

export const getBoardById = async (id) => {
  try {
    const { rows } = await db.query(`SELECT * FROM boards WHERE id='${id}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getBoardByTitle = async (title, workplaceId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM boards WHERE title='${title}' AND workplace_id='${workplaceId}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const createBoard = async ({ title, workplaceId }) => {
  try {
    const { rows } = await db.query(`INSERT INTO boards(title, workplace_id) VALUES ('${title}', '${workplaceId}') RETURNING boards.id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const updateBoard = async ({ id, title }) => {
  try {
    await db.query(`UPDATE boards SET title='${title}' WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteBoard = async (id) => {
  try {
    await db.query(`DELETE FROM boards WHERE id='${id}'`);

    return;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteBoardsByWorkplaceId = async (workplaceId) => {
  try {
    const { rows } = await db.query(`DELETE FROM boards WHERE workplace_id='${workplaceId}' RETURNING id`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
