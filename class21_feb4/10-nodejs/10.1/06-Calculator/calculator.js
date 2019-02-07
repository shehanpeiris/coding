// Can I see my inputs?
// console.log("Operator: ", process.argv[2], "firstNum", parseFloat(process.argv[3]), "secondNum", parseFloat(process.argv[4]));

function calc(x,y,z) {
    switch(x) {
        case 'add':
            console.log(y+z);
            break;
        case 'subtract':
            console.log(y-z);
            break;
        case 'multiply':
            console.log(y*z);
            break;
        case 'divide':
            console.log(y/z);
            break;
        case 'remainder':
            console.log(y%z);
            break;
    };
};

calc(process.argv[2],parseInt(process.argv[3]),parseInt(process.argv[4]));