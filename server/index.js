import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { router_v1 } from './routes/index.js';
import { apiVersionMiddleware, authorizationMiddleware } from './middlewares/index.js';
import { API_VERSION_1 } from './constants.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const runServer = ({ isDev }) => {
  const app = express();

  if (!isDev) {
    app.use(express.static(path.join(dirname, '..', 'dist')));
  }

  app.use(
    apiVersionMiddleware,
    cookieParser(),
    authorizationMiddleware,
    express.json()
  );

  app.use(API_VERSION_1, router_v1);

  app.get('*', (req, res) => isDev
    ? res.status(200).send('Server works')
    : res.status(200).sendFile(path.join(dirname, '..', 'dist', 'index.html'))
  );

  const server = http.createServer(app);

  return server;
};
