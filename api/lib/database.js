const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "umkcgtadatabase"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});


module.exports = connection;