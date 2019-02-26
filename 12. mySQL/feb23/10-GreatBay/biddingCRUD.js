var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "biddieDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// // The POST side of things
function createProduct() {
  console.log("Putting a new item up for auction\n");
  var query = connection.query(
    "INSERT INTO auction_list SET ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// The BID side of things
// Create an array for the list of items
var itemList = [];

function makeBid() {
    console.log("Making a bid on an item...\n");
    connection.query("SELECT * FROM auction_list", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      for (var i=0; i<res.length; i++){
        // console.log(res[i].item_name);
        itemList.push(res[i].item_name);
      };
      console.log(itemList);
      connection.end();
    });
    inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
        type: "list",
        message: "What item would you like to bid on?",
        choices: itemList,
        name: "item"
        },
        // Here we ask the user for their bid.    
    ])
    .then(function(inquirerResponse) {
        console.log(inquirerResponse);
    });
};

makeBid();
  
  
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
