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
    database: "top_songsDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    // inquirerFunc();
    // artistSearch();
    // countHits();
    // songSearch();
    dateSearch();
});

function inquirerFunc(){
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Search by Artist", "Search by Song", "Search by Number of Songs in Top 1000", "Search by Date Range"],
                name: "action"
            }
        ])
        .then(function(inquirerResponse){
            switch(inquirerResponse.action){
                case "Search by Artist":
                    artistSearch();
                    break;
                case "Search by Song":
                    songSearch();
                    break;
                case "Search by Number of Songs in Top 1000":
                    countHits();
                    break;
                case "Search by Date Range":
                    dateSearch();
                    break
            }
        });
};

function artistSearch() {
    var artist = "";
    inquirer
      .prompt([
        {
            type: "input",
            message: "What artist would you like to search?",
            name: "artist"
        }
      ])
      .then(function(inquirerResponse){
        artist = inquirerResponse.artist;
        var query = connection.query(
            "SELECT * FROM top5000 WHERE artist = '" + artist + "'",
            function(err,results) {
                console.log("--------------------\nYOUR SEARCH RESULTS\n---------------\n");
                for (var i=0; i<results.length; i++) {
                    console.log("Position: " + results[i].position + "\nSong: " + results[i].song + "\nYear: " + results[i].year + "\nTotal Sales: " + results[i].raw_total + "\n-----------");
                }          
            }
        );
        connection.end();
      });
};

function countHits() {
    var count;
    inquirer
      .prompt([
        {
            type: "input",
            message: "What is the start year of your date range?",
            name: "startYear"
        },
        {
            type: "input",
            message: "What is the end year of your date range?",
            name: "endYear"
        }
      ])
      .then(function(inquirerResponse){
    var query = connection.query(
        "SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 5",
        function(err,results) {
            console.log("--------------------\nYOUR SEARCH RESULTS\n");
            for (var j=0; j<results.length; j++){
                console.log(results[j].artist);
            };
        }
    );
    connection.end();
};

function songSearch() {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE song = 'Hey Jude'",
        function(err,results) {
            console.log("--------------------\nYOUR SONG RESULTS\n");
            for (var k=0; k<results.length; k++){
                console.log("Position: " + results[k].position + "\nArtist: " + results[k].artist + "\nYear: " + results[k].year + "\nTotal Sales: " + results[k].raw_total);
            };
        }
    );
    connection.end();
};

function dateSearch() {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE year BETWEEN 1991 AND 1995",
        function(err,results) {
            console.log("--------------------\nYOUR SONG RESULTS\n");
            console.log(results);
            // for (var k=0; k<results.length; k++){
                // console.log("Position: " + results[k].position + "\nArtist: " + results[k].artist + "\nYear: " + results[k].year + "\nTotal Sales: " + results[k].raw_total);
            // };
        }
    );
    connection.end();
};