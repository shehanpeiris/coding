var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// * Console log all the party names.
//   * Console log all the client names.
//   * Console log all the parties that have a party-type of grown-up.
//   * Console log all the clients and their parties.
var orm = {
  selectAllColumn: function(colToSearch, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colToSearch, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log("------------------------------");
    });
  },
  selectWhere: function(whatWeWant, tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
    connection.query(queryString, [whatWeWant, tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log("------------------------------");
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log("------------------------------");
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString += " LEFT JOIN ?? AS tTwo";
    queryString += " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
