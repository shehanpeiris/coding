var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "testDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    retrieveData();
});

function retrieveData() {
    var query = connection.query(
        "SELECT * FROM fakeness",
        function(err,res) {
            for (var i=0; i<res.length; i++){
                console.log("ID: " + res[i].id + "\nName: " + res[i].name + "\nOccupation: " + res[i].job + "\nAge: " + res[i].age + "\n----------");
            }    
        }
    );
    connection.end();
};