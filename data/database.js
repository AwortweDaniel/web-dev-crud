const mysql = require("mysql2/promise");
//To connect to your database you use a third party package called 'mysql2'

const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "tokyo2020",
});

module.exports = pool;
