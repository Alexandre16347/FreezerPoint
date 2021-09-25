import express from 'express';
// eslint-disable-next-line no-unused-vars
import database from './backend/database';
import routes from './routes';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
