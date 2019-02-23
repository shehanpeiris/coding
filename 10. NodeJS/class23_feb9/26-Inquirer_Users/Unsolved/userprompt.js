// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");
var correctPassword = "password";
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "confirm",
      message: "Are you ready to build your dating profile?",
      name: "welcomeConfirm"
    },
    {
      type: "input",
      message: "What is your username?",
      name: "name"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Please enter your password",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What is the most important requirement for a strong relationship?",
      choices: ["trust", "chemistry", "compromise", "attractiveness"],
      name: "relGoals"
    },
    {
    type: "checkbox",
    message: "What hobbies do you enjoy?",
    choices: ["reading", "hiking", "clubbing", "going to the gym"],
    name: "hobbies"
    },
    
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure you want to build your profile?",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if ((inquirerResponse.confirm) && (inquirerResponse.password === correctPassword)) {
      console.log("\nHello " + inquirerResponse.name + " Welcome to your LoveDoctor profile!");
      console.log("You will be matched with profiles who alos prioritize " + inquirerResponse.relGoals + " in their relationships.\n");
      console.log("\nTo get the best chance of a lovematch for you, we will search for partners who enjoy the following hobbies:\n" + inquirerResponse.hobbies);
    }
    else if (!inquirerResponse.confirm) {
      console.log("That's okay, " + inquirerResponse.name + ". You can come back when you're ready for love.");
    }
    else if (inquirerResponse.password ==! correctPassword) {
      console.log("Your password doesn't match what's associated with your account. Please try again.");
    }
  });
