require('dotenv').config();

const mysql = require('mysql2');


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 
});

module.exports = pool.promise();

async function fetchUsers() {
    try {
        const [rows, fields] = await pool.promise().query('SELECT * FROM users'); 
        console.log(rows);
    } catch (error) {
        console.error('Error executing query', error);
    }
}


fetchUsers();