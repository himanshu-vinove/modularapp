const Sequelize = require("sequelize");
var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpassword",
  database: "testapi",
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }
});
module.exports = connection;
