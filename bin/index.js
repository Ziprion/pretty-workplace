import { runServer } from '../server/index.js';

const isDev = process.env.NODE_ENV === 'development';
const port = process.env.PORT;

runServer({ isDev }).listen(port);
