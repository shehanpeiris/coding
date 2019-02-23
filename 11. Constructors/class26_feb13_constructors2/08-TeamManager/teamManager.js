// dependency for inquirer npm package
var inquirer = require("inquirer");

// build player constructor
var player = function(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
};

// creates the printInfo method and applies it to all programmer objects
player.prototype.printInfo = function() {
    console.log("----------------\nName: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    console.log("---------------");
};

// creates goodGame method and applies it to all programmer objects
player.prototype.goodGame= function() {
    var coin = Math.floor(Math.random()*2);
    if (coin === 0) {
        this.offense ++;
    } else {
        this.defense ++;
    };
};

// creates badGame method and applies it to all programmer objects
player.prototype.badGame= function() {
    var coin = Math.floor(Math.random()*2);
    if (coin === 0) {
        this.offense --;
    } else {
        this.defense --;
    };
};

// variable we will use to count how many times our questions have been asked
var count = 0;
// arrays in which we will store each our player objects and separate by starter vs. sub
var playerArray = [];
var starterArray = [];
var subArray = [];
// create variables for offense and defense score of our lineups
var offense = 0;
var defense = 0;
// create variable to track score
var score = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked three times
  if (count < 3) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable response inside of the .then statement
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      }, {
        type: "list",
        name: "position",
        choices: ["Starter", "Substitute"],
        message: "What position are you?"
      }, {
        type: "input",
        name: "offense",
        message: "How good is your offense? (1-10)",
        validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
      }, {
        type: "input",
        name: "defense",
        message: "How good is your defense? (1-10)",
        validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
      }
    ]).then(function(response) {
      // initializes the variable newPlayer to be a player object which will
      // take in all of the user's answers to the questions above
      var newPlayer = new player(
        response.name,
        response.position,
        parseInt(response.offense),
        parseInt(response.defense));
      // pushes newPlayer object into our array
      playerArray.push(newPlayer);
      // this if statement separates players by starter/sub status
      if (response.position === "Starter") {
        starterArray.push(newPlayer);
      } else {
        subArray.push(newPlayer);
      };
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var i = 0; i < playerArray.length; i++) {
      playerArray[i].printInfo();
    };
    playGame();
  }
};

// call askQuestion to run our code
askQuestion();

function playGame() {
    // overarching for-loop to run game function 5 times
    for (var x=1; x<6; x++) {
        console.log("\nPossession: " + x);
        // run the offense portion of the game, generate offDice between 1-20
        // if offDice is higher than combined offense of our lineup, no score
        // if combined offense > offDice, we scored!
        var offDice = Math.ceil(Math.random()*20);
        console.log("Target Score: " + offDice);
        for (var j=0; j<starterArray.length; j++) {
            offense += starterArray[j].offense;
        }
        console.log("Lineup Offense: " + offense);
        if (offense > offDice) {
            console.log("*Swish* You scored!");
            score ++;
            offense = 0;
        } else {
            console.log("BOOO. You didn't score");
            offense = 0;
        };
        
        // run the defense portion of the game, generate defDice between 1-20
        // if defDice is higher than combined defense of our lineup, we concede a basket
        // if combined defense > defDice, we got a stop!
        var defDice = Math.ceil(Math.random()*20);
        console.log("Target Score: " + defDice);
        for (var k=0; k<starterArray.length; k++) {
            defense += starterArray[k].defense;
        }
        console.log("Lineup Defense: " + defense);
        if (defense > defDice) {
            console.log("DE-FENSE! Great stop!");
            score ++;
            defense = 0;
        } else {
            console.log("Where's the help? You conceded a bucket");
            score --;
            defense = 0;
        };
    };
    // End of game. Figure out result and log appropriate responses.
    console.log("5...4...3...2...1...GAME OVER!\nFinal Score: " + score);
    if (score > 0) {
        console.log("Congratulations! You won the freaking championship!");
    } else {
        console.log("You lost...get back in the gym, son!");
    }
};