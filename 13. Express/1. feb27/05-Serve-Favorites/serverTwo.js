// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 2336;

// Create our server
var server = http.createServer(handleRequest);
var filePath="";

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            filePath = "/index.html";
            break;

        case "/movies":
            filePath = "/movies.html";
            break;

        case "/animals":
            filePath = "/animals.html";
            break;

        case "/foods":
            filePath = "/foods.html";
            break;

        case "/languages":
            filePath = "/languages.html";

        default:
            filePath = "/error.html";
    };

    displayContent(path, req, res);
};

function displayContent(url, req, res){
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + filePath, function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

// function displayRoot(url, req, res){
//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/index.html", function(err, data) {

//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// };

// function displayMovies(url, req, res){
//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/movies.html", function(err, data) {

//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// };

// function displayAnimals(url, req, res){
//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/animals.html", function(err, data) {

//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// };

// function displayFoods(url, req, res){
//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/foods.html", function(err, data) {

//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// };

// function displayLanguages(url, req, res){
//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/languages.html", function(err, data) {

//         // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//         // an html file.
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// };

// function display404(url, req, res) {
//     var myHTML = "<html>" +
//       "<body><h1>404 Not Found </h1>" +
//       "<p>The page you were looking for: " + url + " can not be found</p>" +
//       "</body></html>";
  
//     // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//     res.writeHead(404, { "Content-Type": "text/html" });
  
//     // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
// };
  

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
