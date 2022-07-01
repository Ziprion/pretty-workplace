import { db } from './db.js';

export const getUser = async (email) => {
  const { rows } = await db.query(`SELECT * FROM users WHERE email='${email}'`);

  return rows[0];
};

export const createUser = async ({
  email, password, lastName, firstName, avatarBackground, avatarUrl,
}) => {
  const { rows } = await db.query(`
      INSERT INTO users(
        email, password, last_name, first_name, avatar_background, avatar_url)
        VALUES ('${email}', '${password}', '${lastName}', '${firstName}', '${avatarBackground}', ${avatarUrl})
        RETURNING users.id`);

  return rows[0];
};
