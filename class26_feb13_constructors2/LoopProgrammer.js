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

var inqQues = [
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
    },
    {
        type: "confirm",
        message: "Are you done adding programmers?",
        name: "confirm",
        default: true
    }
];

function ask(){
    inquirer
    .prompt(inqQues)
    .then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
            var newProgrammer = new programmer(inquirerResponse.name, inquirerResponse.title, inquirerResponse.age, inquirerResponse.language);
            newProgrammer.print();
        } else {
            var newProgrammer = new programmer(inquirerResponse.name, inquirerResponse.title, inquirerResponse.age, inquirerResponse.language);
            ask();
        }
    });
};

ask();