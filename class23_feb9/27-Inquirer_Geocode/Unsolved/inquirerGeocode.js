// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");
var address = "";
// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "8j1bmNF0W9ZlEClt1eKQAycAGsrszcPh"
};

var geocoder = NodeGeocoder(options);

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Please enter your street number and name (e.g. 13 Mockingbird Lane):",
      name: "street"
    },
    {
      type: "input",
      message: "Please enter your city (e.g. Chicago):",
      name: "city"
    },
    {
      type: "input",
      message: "Please enter your state code (e.g. IL):",
      name: "state"
    }
    // {
    //   type: "confirm",
    //   message: "Is all your information accurate?",
    //   name: "confirm",
    //   default: true
    // },
  ])
  .then(function(inquirerResponse) {
    // if (inquirerResponse.confirm) {
      address = inquirerResponse.street + " " + inquirerResponse.city + " " + inquirerResponse.state;
      geocoder.geocode(address, function(err, data) {
        console.log(JSON.stringify(data, null, 2));
      });
    // };
  });
