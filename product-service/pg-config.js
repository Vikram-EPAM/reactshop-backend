import pg from "pg";

const pgConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

export const pgClient = new pg.Client(pgConfig);
export const pgPool = new pg.Pool(pgConfig);
