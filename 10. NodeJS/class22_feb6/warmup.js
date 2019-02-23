var arrOne = [1,2,2,3];
var arrTwo = [4,5,4,4,7,5];
var arrThree = [1,2,3,5];
var arrFour = [1,2,3,2,2,3,5,1,6];

function nodupe(inputArr) {
    var uniqueArray = [];
    for (var i=0; i<inputArr.length; i++) {
        if(uniqueArray.indexOf(inputArr[i]) === -1){
            uniqueArray.push(inputArr[i])
        };
    };
    console.log(uniqueArray);
};

nodupe(arrOne);
nodupe(arrTwo);
nodupe(arrThree);
nodupe(arrFour);