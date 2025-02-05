import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from "./config/config.mjs";

const dbOptions = <SequelizeOptions>options;
dbOptions.dialectModule = require("pg");

const db = new Sequelize(dbOptions);

export default db;
