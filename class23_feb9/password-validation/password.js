var password = process.argv[2];
var upperCaseLetters = /[A-Z]/g;
var lowerCaseLetters = /[a-z]/g;

if (password.length < 8) {
    console.log("Your password does not meet the minimum length requirements.");
};

if (password.value.match(lowerCaseLetters)) {
    console.log("Your password contains both upper-case and lower-case letters");
};