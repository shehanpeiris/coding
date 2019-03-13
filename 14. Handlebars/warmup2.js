var halfwayHouse = [];

function whiteSpace(str) {
  var noSpace = (str.replace(/\s/g, "")).toLocaleLowerCase();
  var output = noSpace.replace(/[^a-zA-Z ]/g, "");
  console.log(output);
};

whiteSpace("     Th%#!is   is M y Name    ");