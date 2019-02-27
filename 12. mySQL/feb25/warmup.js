// Write a function that takes an array of numbers and a function as parameters.
// The function parameter should return true if the input meets a certain condition
// or false otherwise. Your function should return true if the function parameter
// returns true for _any_ of the array elements in the array parameter or false otherwise. 

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: true

// Input: [1,5,3]  function(num){return num === 2}
// Output: false

// Input: [1,2,3]  function(num){return num % 2 === 0}
// Output: true

// Input: [1,5,3]  function(num){return num % 2 === 0}
// Output: false

var test = [1,3,5,6];
var numFlag = false;

function arrayChecker(arg,cb){
    console.log(cb(arg));
};

function numCheck(arg) {
    for (var i=0; i<test.length; i++){
        if (test[i]===arg){
            numFlag = true;
        };
    };
    console.log(numFlag);
};

arrayChecker(3,numCheck);