import { runServer } from '../server/index.js';

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const port = process.env.PORT || process.env.SERVER_PORT;

runServer({ isDev }).listen(port);
