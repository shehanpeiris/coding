// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grab headlines from ESPN's NBA site:" +
            "\n***********************************\n");

// Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.espn.com/nba").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);
  // console.log("Testing response: ", $);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("h1.contentItem__title.contentItem__title--story").each(function(i, element) {

    var headline = $(element).text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({headline: headline});
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
