var importRap = require("./bands.js");

var groups = importRap.rapStyle;
console.log("The groups var: " + groups);

var x;

switch(process.argv[2]) {
    case "southern":
        console.log(groups[x]);
        break;
    default:
        for (x in groups) {
            // console.log(groups[x]);
            console.log("A " + x + " rapper is " + groups[x]);
        };
};


