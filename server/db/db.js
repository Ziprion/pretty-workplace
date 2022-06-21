import pkg from 'pg';

const { Pool } = pkg;

const db = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
  max: 19,
});
db.connect();

export { db };
