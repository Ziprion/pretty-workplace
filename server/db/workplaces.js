import { db } from './db.js';

export const getWorkplaces = async (userId) => {
  const { rows } = await db.query(`SELECT id, title, boards_position FROM workplaces WHERE user_id='${userId}'`);

  return rows;
};

export const getWorkplaceById = async (id) => {
  const { rows } = await db.query(`SELECT * FROM workplaces WHERE id='${id}'`);

  return rows[0];
};

export const getWorkplaceByTitle = async (title, userId) => {
  const { rows } = await db.query(`SELECT * FROM workplaces WHERE title='${title}' AND user_id='${userId}'`);

  return rows[0];
};

export const createWorkplace = async ({ title, userId }) => {
  const { rows } = await db.query(`INSERT INTO workplaces(title, user_id) VALUES ('${title}', '${userId}') RETURNING id`);

  return rows[0];
};

export const updateBoardsPosition = async (id, boardsPosition) => {
  const { rows } = await db.query(`UPDATE workplaces SET boards_position='{${boardsPosition.toString()}}' WHERE id='${id}' RETURNING boards_position`);

  return rows[0];
};

export const updateWorkplace = async ({ id, title }) => {
  await db.query(`UPDATE workplaces SET title='${title}' WHERE id='${id}'`);
};

export const deleteWorkplace = async (id) => {
  await db.query(`DELETE FROM workplaces WHERE id='${id}'`);
};

export const addBoardsPosition = async (boardId, workplaceId) => {
  await db.query(`UPDATE workplaces SET boards_position=array_append(boards_position, '${boardId}') WHERE id='${workplaceId}'`);
};

export const deleteBoardPosition = async (boardId, workplaceId) => {
  await db.query(`UPDATE workplaces SET boards_position=array_replace(boards_position, ${boardId}, 0) WHERE id='${workplaceId}'`);
};
