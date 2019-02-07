var fs = require("fs");
var method = process.argv[2];
var atm = parseFloat(process.argv[3]).toFixed(2);
var balance = 0;
var finalBalance = parseFloat(balance).toFixed(2);

function total() {
    fs.readFile("bank.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    for(var i=0; i<dataArr.length; i++) {
        balance += parseFloat(dataArr[i]);
    };
    finalBalance = parseFloat(balance).toFixed(2);
    console.log("Balance: " + balance.toFixed(2));
  });
};

// If the "Deposit" function is called...
function deposit() {
    // We will add the value to the bank file.
    fs.appendFile("bank.txt", ", " + atm, function(err) {
      if (err) {
        return console.log(err);
      }
    });
   
    // We will then print the value that was added (but we wont print the total).
    console.log("Your deposit of " + atm + " dollars has been processed.");
   };

// If the "Withdraw" function is called...
function withdraw() {
    // We will add the value to the bank file.
    fs.appendFile("bank.txt", ", -" + atm, function(err) {
      if (err) {
        return console.log(err);
      }
    });
   
    // We will then print the value that was added (but we wont print the total).
    console.log("Your withdrawal of " + atm + " dollars has been processed.");
   }

switch(method) {
    case "total":
        total();
        break;
    case "deposit":
        deposit();
        break;
    case "withdraw":
        withdraw();
        break;
    case "lotto":
        console.log("You are a degenerate gambler.");
        break;
    case "default":
        console.log("Please enter a valid command, you buffoon.");
        break;
};