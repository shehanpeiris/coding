// DEPENDENCIES

// Require sequelize package for use
var Sequelize = require("sequelize");

// Set up DB connection
var sequelize = require("../config/connection.js");

// Create the sequelize model (aka the table)
var allcharacters = sequelize.define("allcharacters", {
    routeName: Sequelize.STRING,
	name: Sequelize.STRING,
	role: Sequelize.STRING,
	age: Sequelize.INTEGER,
	forcePoints: Sequelize.INTEGER,
},{
	freezeTableName: true
});

// Sync model with DB
allcharacters.sync();

// Export model for use in other files.
module.exports = allcharacters;