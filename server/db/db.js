import pkg from 'pg';

const { Pool } = pkg;

export const db = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});
