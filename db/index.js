import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yelp',
  password: 'Kubin200519%',
  port: 5432,
});
export default {
  query: (text, params) => pool.query(text, params),
};