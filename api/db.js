import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"blog",
    password:"isy987"
})