import { Sequelize, Model } from 'sequelize-typescript';

import { APP_ENV } from '../app.constants';

export class DbHelper {
  public dbInstance: Sequelize;
  private dbConfig: any;

  constructor() {
    const config = require('../../config/database.json');
    this.dbConfig = config[APP_ENV];
    this.dbInstance = new Sequelize({
      database: this.dbConfig.database,
      host: this.dbConfig.host,
      username: this.dbConfig.username,
      password: this.dbConfig.password,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      operatorsAliases: false
    });
  }

  async init(models?: Array<typeof Model>) {
    try {
      if (models) { this.dbInstance.addModels(models); }
      await this.dbInstance.authenticate();
      console.log('Succesfully connected to database');
      return this.dbInstance;
    } catch (err) {
      console.log('Error connecting to database', err);
      throw err;
    }
  }
}
