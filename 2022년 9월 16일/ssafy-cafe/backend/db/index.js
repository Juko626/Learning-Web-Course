
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	// aws ip
	host: "3.38.70.209",
	// mysql username
	user: "user2",
	// mysql user password
	password: "111111",
	// db name
	database: "order_system_2",
	waitForConnections: true,
	connectionLimit: 10, 
	queueLimit: 0,
});

module.exports = { pool };
