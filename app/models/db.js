const mysql = require('mysql');
const dbConfig = require('../config/db.config');
// Create connection to database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error =>{
    if (error) throw error;
    console.log("Successfully connected to database");
});
module.exports = connection;