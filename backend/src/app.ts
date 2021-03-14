import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate'

function app() {
  const server = express();

  server.use(cors());
  server.use(express.json());
  server.use(routes);
  server.use(errors());

  // this.server.use(
  //   '/files',
  //   express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
  // );

  return server;
}


export default app;