// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring sequelize package
var Sequelize = require("sequelize");

// Setting up our connection using sequelize
var sequelize = new Sequelize("sequelize_starwars", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

// Exporting our connection
module.exports = sequelize;
