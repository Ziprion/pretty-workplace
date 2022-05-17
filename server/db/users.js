import { db } from './db.js';

export const getUser = async (email) => {
  try {
    const { rows } = await db.query(`SELECT * FROM users WHERE email='${email}'`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};

export const createUser = async ({
  email, password, lastName, firstName, avatarBackground, avatarUrl,
}) => {
  try {
    const { rows } = await db.query(`
      INSERT INTO users(
        email, password, last_name, first_name, avatar_background, avatar_url)
        VALUES ('${email}', '${password}', '${lastName}', '${firstName}', '${avatarBackground}', ${avatarUrl})
        RETURNING users.id`);

    return rows[0];
  } catch (e) {
    console.log(e.stack);

    throw (e);
  }
};
