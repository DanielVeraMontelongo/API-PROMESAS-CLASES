import * as mysql from 'mysql2/promise';

export  const connect = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'codenotch',
    database: 'usuarios',
  });

  return connection;
};