// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT_DEUX = 7500;

var quotes = ["YOU CAN DO IT!!!", "Not everybody's gonna be successful, but if you're scared to fail, you don't deserve to be successful.", "If you're not taking Ls occasionally, it means you're not trying enough things."];
function randomQuote(){
    return quotes[Math.floor((Math.random())*3)];
}

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("First Server Path Hit: " + request.url +"\n" + randomQuote());
};

// Create second request 
function handleRequestTwo(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Second Server Path Hit: " + request.url + "\n" + randomQuote());
  };

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

serverTwo.listen(PORT_DEUX, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT_DEUX);
  });