import mysql from 'mysql'
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host:       process.env.SQLHOST,
    user:       process.env.SQLUSERNAME,
    password:   process.env.SQLPASS,
    database:   process.env.SQLDATABASE
});

export default connection;