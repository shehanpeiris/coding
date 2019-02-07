// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"

var method = process.argv[2];
var movieName = process.argv[3];
for (var i=4; i<process.argv.length; i++) {
    movieName += "+" + process.argv[i]
    console.log("IM HERE");
};
var year = "";



// ...


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...
var axios = require("axios");

function getYear() {
    axios.get(queryUrl).then(
    function(response) {
        var year = response.data.Year;
        console.log("This movie was released in " + year);
    }
    );
};

function getBoxOffice() {
    axios.get(queryUrl).then(
    function(response) {
        var boxOffice = response.data.BoxOffice;
        console.log("This movie earned " + boxOffice + " at the box office.");
    }
    );
};

function getAwards() {
    axios.get(queryUrl).then(
    function(response) {
        var awards = response.data.Awards;
        console.log("This movie won the following awards: " + awards);
    }
    );
};

function getRating() {
    axios.get(queryUrl).then(
    function(response) {
        var rating = response.data.Rated;
        console.log("This movie was rated: " + rating);
    }
    );
};

switch(method) {
    case "year":
        getYear();
        break;
    case "boxOffice":
        getBoxOffice();
        break;
    case "awards":
        getAwards();
        break;
    case "rating":
        getRating();
        break;
};