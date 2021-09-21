import Sequelize from 'sequelize';
import Usuario from '../app/models/usuario';
import databaseConfig from '../config/database';

const models = [Usuario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
