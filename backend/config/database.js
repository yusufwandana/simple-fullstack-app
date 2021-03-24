import mysql from "mysql2";

// Create connection
const db = mysql.createConnection({
    host:       "localhost" ,
    user:       "root",
    password:   "",
    database:   "db_pos"
});

export default db;