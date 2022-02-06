import { db } from './db.js';

export const getBoards = async (workplaceId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM boards WHERE workplace_id='${workplaceId}'`);

    return rows;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getIsExistBoardById = async (boardId, workplaceId) => {
  try {
    const { rows } = await db.query(`SELECT * FROM boards WHERE id='${boardId}' AND workplace_id='${workplaceId}'`);

    return !!rows.length;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getIsExistBoardByTitle = async (boardTitle, workplaceId) => {
  try {
    const { rows } = await db.query(`SELECT title FROM boards WHERE workplace_id='${workplaceId}'`);

    return !!rows.find(({ title }) => title.toLowerCase() === boardTitle.toLowerCase());
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const getBoardWorkplaceId = async (boardId) => {
  try {
    const { rows } = await db.query(`SELECT workplace_id FROM boards WHERE id=${boardId}`);

    return rows[0]?.workplace_id;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const addBoard = async (boardTitle, workplaceId, boardOrder) => {
  try {
    const { rows } = await db.query(`INSERT INTO boards(title, workplace_id, board_order) VALUES ('${boardTitle}', ${workplaceId}, '${boardOrder}') RETURNING boards.id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const deleteBoard = async (boardId) => {
  try {
    await db.query(`DELETE FROM boards WHERE id='${boardId}'`);

    return;
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
