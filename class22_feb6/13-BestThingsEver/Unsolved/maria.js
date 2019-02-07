// fs is a core Node package for reading and writing files
var fs = require("fs");

fs.writeFile("best_things_ever.txt", "healthy Anthony Davis, a full NBA League Pass night, blue skies, lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap, a long hug, comfort food", function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");
  
  });



// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
//   console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(", ");

  // We will then re-display the content as an array for later use.
//   console.log(dataArr);

  for (var i=0;i<dataArr.length;i++){
      console.log(dataArr[i]);
  }

});
