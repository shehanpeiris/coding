function reverseNum(num) {
    var stringNum = num.toString();
    console.log("StringNum test", stringNum);
    var revNum = "";
    for (var i=stringNum.length; i<1; i--) {
        revNum.push(stringNum.charAt(i));
    };
    console.log(revNum);
};

function reverseAnswer(num) {
    console.log(num.toString().split().reverse());
}

reverseAnswer(1234);