// Capture input
console.log(process.argv[2]);

// var input = process.argv[2];
var sum = 0;

for (var i=parseInt(process.argv[3]); i<parseInt(process.argv[2]); i+=parseInt(process.argv[3])) {
    console.log(i);
    sum += i;
    // console.log("Final Product: " + sum);
};

console.log("Final Product: " + sum);