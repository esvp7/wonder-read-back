import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'xvbgavtchsxpue',
  host: 'ec2-44-205-112-253.compute-1.amazonaws.com',
  database: 'dftp0851t8cp9l',
  password: 'e3364231965fadb23da3d6fb9c2cf18a653d431df6c90926dfd5602f6cc7e958',
});
export default {
  query: (text, params) => pool.query(text, params),
};
