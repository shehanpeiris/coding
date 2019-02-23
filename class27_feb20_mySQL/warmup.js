var test = [1,4,6,2];

function arrayDouble(arr) {
    var outputArr = [];
    for (var i=0; i<arr.length; i++) {
        output = (arr[i])*2;
        outputArr.push((output));
    };
    console.log(outputArr);
};

arrayDouble(test);
