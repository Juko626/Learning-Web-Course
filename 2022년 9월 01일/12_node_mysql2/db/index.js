const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  //aws ip
  host: "15.165.155.31",
  user: "ssafy",
  password: "ssafy_8th_A",
  database: "junsuDB",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
