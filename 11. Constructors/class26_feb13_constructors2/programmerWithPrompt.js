var inquirer = require("inquirer");

var programmer = function(name, title, age, language) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.language = language;
    this.print = function() {
        console.log("---------------------\nName: " + this.name + "\nTitle: " + this.title + 
        "\nAge: " + this.age + "\nFavorite Language: " + this.language
        + "\n---------------------\n");
    };
};

inquirer
    .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your current role/title?",
          name: "title"
        },
        {
            type: "input",
            message: "How old are you?",
            name: "age"
        },
        {
            type: "list",
            message: "What is your favorite programming language?",
            choices: ["HTML", "CSS", "JavaScript"],
            name: "language"
        }
    ])
    .then(function(inquirerResponse) {
        var newProgrammer = new programmer(inquirerResponse.name, inquirerResponse.title, inquirerResponse.age, inquirerResponse.language);
        newProgrammer.print();
    });