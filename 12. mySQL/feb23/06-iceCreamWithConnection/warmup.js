// Write a function that takes an array of numbers and a function as parameters.
// The function paremeter should do something to a numbers (increment, double, 
// decrement, etc) and return the result. Your function should return the array 
// that results from applying the function parameter to each element in the number array. 

// Ex:
// Input: [1,2,3]  function(num){return num * 2*}
// Output: [2,4,6]

// Input: [1,2,3]  function(num){return num + 1}
// Output: [2,3,4]

// Input: [1,2,3] function(num) {return num /2}
// Output: [.5, 1. 1.5]

// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1, 0, 1]

var arrOne = [1,2,3];
var arrTwo = [2,3,7,4];
var arrThree = [4,6,12,31];

var method = process.argv[2];
var array = process.argv[3];

switch(method) {
    case "increment":
        if (array === "arrOne"){
            increment(arrOne);
        } else if (array === "arrTwo"){
            increment(arrTwo);
        }
        break;
    case doubleUp:
        doubleUp(array);
        break;
};

function arraySwitch(arr,callback){
    var results = [];
    for (var i = 0; i<arr.length; i++){
        results.push(callback(arr[i]));
    };
    return results;
};

function increment(input){
    return input + 1;
};

function doubleUp(arr){
    console.log("DoubleUp Input: " + arr);
    for (var i=0; i<arr.length; i++){
        arr[i] = (arr[i])*2;
    };
    console.log("DoubleUp Output: " + arr); 
}

// increment(arrTwo);

// arraySwitch(arrThree,increment);
// arraySwitch(arrOne,doubleUp);