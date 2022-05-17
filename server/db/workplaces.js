import { db } from './db.js';

export const getWorkplaces = async (userId) => {
  try {
    const { rows } = await db.query(`SELECT id, title, boards_position FROM workplaces WHERE user_id='${userId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getWorkplaceById = async (id) => {
  try {
    const { rows } = await db.query(`SELECT * FROM workplaces WHERE id='${id}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getWorkplaceByTitle = async (title, userId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM workplaces WHERE title='${title}' AND user_id='${userId}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const createWorkplace = async ({ title, userId }) => {
  try {
    const { rows } = await db.query(`INSERT INTO workplaces(title, user_id) VALUES ('${title}', '${userId}') RETURNING id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const updateBoardsPosition = async (id, boardsPosition) => {
  try {
    await db.query(`UPDATE workplaces SET boards_position='{${boardsPosition.toString()}}' WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const updateWorkplace = async ({ id, title }) => {
  try {
    await db.query(`UPDATE workplaces SET title='${title}' WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteWorkplace = async (id) => {
  try {
    await db.query(`DELETE FROM workplaces WHERE id='${id}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const addBoardsPosition = async (boardId, workplaceId) => {
  try {
    await db.query(`UPDATE workplaces SET boards_position=array_append(boards_position, '${boardId}') WHERE id='${workplaceId}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteBoardPosition = async (boardId, workplaceId) => {
  try {
    await db.query(`UPDATE workplaces SET boards_position=array_replace(boards_position, ${boardId}, 0) WHERE id='${workplaceId}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
