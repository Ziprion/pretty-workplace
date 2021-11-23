import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { router } from './routes.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const runServer = ({ isDev }) => {
  const app = express();
  if (!isDev) {
    app.use(express.static(path.join(dirname, '..', 'dist')));
  }

  app.use(cookieParser());
  app.use(express.json());

  app.use('/api/v1', router);

  app.get('*', (req, res) => (isDev
    ? res.status(200).send('Server works')
    : res.status(200).sendFile(path.join(dirname, '..', 'dist', 'index.html'))));

  const server = http.createServer(app);

  return server;
};
