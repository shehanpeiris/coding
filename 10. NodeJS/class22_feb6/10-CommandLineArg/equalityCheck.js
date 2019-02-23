function equalityCheck(x,y) {
    if(x===y) {
        console.log("true");
    } else {
        console.log("false");
    };
};

// equalityCheck(process.argv[2],process.argv[3]);

function sevens(x,y) {
    if((x % 7 == 0) && (y % 7 == 0)) {
        console.log("true");
    } else {
        console.log("false");
    };
};

sevens(parseInt(process.argv[2]),parseInt(process.argv[3]));