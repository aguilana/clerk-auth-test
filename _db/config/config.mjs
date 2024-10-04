/* eslint-disable import/no-anonymous-default-export */
export const options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  migrationStorageTableName: "migrations",
  models: [__dirname + "/../models"],
};

if (process.env.NODE_ENV === "production") {
  options.dialectOptions = {
    rejectUnauthorized: false,
  };
}

export default {
  development: options,
  test: options,
  production: options,
};
