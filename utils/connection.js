const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "brent",
    password: "Denver5280",
    database: ""
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;