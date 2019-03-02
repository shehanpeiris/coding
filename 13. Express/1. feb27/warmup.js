// Pre-Class Challenge

// Write a function that takes an array of numbers and a function as parameters.
// The function parameter should return true if the input meets a certain condition
// or false otherwise. Your function should run the function parameter on every
// element in the array parameter and , if it returns true, add the element to a new
// array. Return the new array.

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: [2]

// Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
// Output: [2,4,6]

// Input: [1,2,3,4,5,6]  function(num){return num > 3}
// Output: [4,5,6]

var testArr = [1,2,3,4,5,6];
var parsedArr = [];

function evenNum(num){
    return (num%2===0)
};

function divThree(num){
    return (num%3===0)
};

function arrayManipulator(arr,cb){
    for (var i=0; i<arr.length; i++) {
        if (cb(arr[i])){
            parsedArr.push(arr[i]);
        };
    };
    console.log(parsedArr);
};

arrayManipulator(testArr, evenNum);
arrayManipulator(testArr, divThree);

