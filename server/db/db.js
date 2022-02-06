import pkg from 'pg';

const { Client } = pkg;

const db = new Client({ ssl: { rejectUnauthorized: false } });
db.connect();

export { db };
