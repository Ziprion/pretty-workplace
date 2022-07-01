import { db } from './db.js';

export const getActiveWorkplace = async (userId) => {
  const { rows } = await db.query(`SELECT id FROM active_workplaces WHERE user_id='${userId}'`);

  return rows[0];
};

export const setActiveWorkplace = async (userId) => {
  await db.query(`INSERT INTO active_workplaces(id, user_id) VALUES (NULL, '${userId}')`);
};

export const updateActiveWorkplace = async (id, userId) => {
  await db.query(`UPDATE active_workplaces SET id='${id}' WHERE user_id='${userId}'`);
};

export const clearActiveWorkplace = async (userId) => {
  await db.query(`UPDATE active_workplaces SET id=NULL WHERE user_id='${userId}'`);
};
