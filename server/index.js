import cookieParser from 'cookie-parser';
import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

import { apiVersionMiddleware, authorizationMiddleware } from './middlewares/index.js';
import { apiV1, routerV1 } from './routes/index.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const runServer = ({ isDev }) => {
  const app = express();

  if (!isDev) {
    app.use(express.static(path.join(dirname, '..', 'dist')));
  }

  app.use(
    cookieParser(),
    authorizationMiddleware,
    apiVersionMiddleware,
    express.json(),
  );

  app.use(apiV1, routerV1);

  app.get('*', (_, res) => (isDev
    ? res.status(200).send('Server works')
    : res.status(200).sendFile(path.join(dirname, '..', 'dist', 'index.html'))));

  const server = http.createServer(app);

  return server;
};
