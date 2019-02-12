// Load the npm package inquirer
// var inquirer = require("inquirer");

// Construct the constructor!
var digitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.")
        }
    };
    this.sleep = function() {
        if (this.sleepy) {
            console.log("Zzzzzzzzz.");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function() {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Maybe later?");
        }
    };
    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy Birthday to me! I am" + age + "!");
    }
};

var dog = new digitalPal();
dog.outside = false;
dog.bark = function() {
    console.log("Woof woof!");
};
dog.goOutside = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside ya dummy!");
    }
};
dog.goInside = function() {
    if(this.outside) {
        console.log("Do we have to??");
        this.outside = false;
    } else {
        console.log("I'm already inside ya dummy!");
    }
};

var cat = new digitalPal();
cat.houseCondition = 100;
cat.meow = function() {
    console.log("Meow meow!");
};
cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("Muahahahaha! Take that, furniture!");
        this.bored = false;
        this.sleepy = true;
    }
};

cat.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

var pet = process.argv[2];
var action = process.argv[3];

if (pet === "dog") {
    switch(action){
        case "play":
            dog.play();
            break;
        case "feed":
            dog.feed();
            break;
        case "sleep":
            dog.sleep();
            break;
    };
} else if (pet === "cat") {
    switch(action){
        case "play":
            dcat.play();
            break;
        case "feed":
            cat.feed();
            break;
        case "sleep":
            cat.sleep();
            break;
    };
}


// inquirer
// .prompt([
//     // Here we give the user a list to choose from.
//     {
//         type: "list",
//         message: "Which Tamagotchi do you want to care for?",
//         choices: ["Dog", "Cat"],
//         name: "animalChoice"
//     },
//     {
//         type: "list",
//         message: "What do you want to do for your pet?",
//         choices: ["Feed them", "Play with them", "Put them to sleep"],
//         name: "action"
//     },
// ])
// .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.animalChoice == "Dog") {
//         if (inquirerResponse.action == "Feed them") {
//             dog.feed();
//         } else if (inquirerResponse.action == "Play with them") {
//             dog.play();
//         } else if (inquirerResponse.action == "Put them to sleep") {
//             dog.sleep();
//         }
//     }
//     else {
//         if (inquirerResponse.action == "Feed them") {
//             cat.feed();
//         } else if (inquirerResponse.action == "Play with them") {
//             cat.play();
//         } else if (inquirerResponse.action == "Put them to sleep") {
//             cat.sleep();
//         }
//     }
// });