const mysql = require('mysql2');
const pool = mysql.createPool({
  connectionLimit : 10,
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : '123456',
  database : 'meditrack'
});

pool.query('SELECT 1', (err, results, fields) => {
  if (err) {
    throw err;
  }
  console.log('Resultado de la consulta: ', results);

});




