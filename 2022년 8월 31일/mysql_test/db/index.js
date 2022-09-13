const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "43.200.232.205",
  user: "kojunsu",
  password: "*Ssafy8th",
  database: "junsuDB",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});




module.exports = { pool };