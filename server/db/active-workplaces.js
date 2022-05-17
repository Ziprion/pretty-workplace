import { db } from './db.js';

export const getActiveWorkplace = async (userId) => {
  try {
    const { rows } = await db.query(`SELECT id FROM active_workplaces WHERE user_id='${userId}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const setActiveWorkplace = async (userId) => {
  try {
    await db.query(`INSERT INTO active_workplaces(id, user_id) VALUES (NULL, '${userId}')`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const updateActiveWorkplace = async (id, userId) => {
  try {
    await db.query(`UPDATE active_workplaces SET id='${id}' WHERE user_id='${userId}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const clearActiveWorkplace = async (userId) => {
  try {
    await db.query(`UPDATE active_workplaces SET id=NULL WHERE user_id='${userId}'`);
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
