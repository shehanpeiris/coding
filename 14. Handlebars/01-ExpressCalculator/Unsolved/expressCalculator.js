// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// We need routes for each operation (add, subtract, multiply, divide);
// TODO Add your routes here
app.get("/", function(req, res) {
  return displayHome(req, res);
});

app.get("/:operator/:first/:second", function(req, res) {
  // TODO parse out the variables from the request
  // res.send(req.params);
  var operation = req.params.operator;
  var firstNum = parseInt(req.params.first);
  var secondNum = parseInt(req.params.second);
  console.log("Operation: ", operation, "Number: ", firstNum, "Second Number: ", secondNum); 
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
  case "+":
    // Add your logic here. Pun intended.
    result = firstNum + secondNum;
    break;
  case "subtract":
  case "-":
    // Subtract logic
    result = firstNum - secondNum;
    break;
  case "multiply":
  case "*":
    // Multiply
    result = firstNum * secondNum;
    break;
  case "divide":
    // Divide
    result = firstNum / secondNum;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

function displayHome(req, res) {
  var myHTML = "<html>" +
    "<body><h3>Welcome to my Express Calculator!</h3>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};
