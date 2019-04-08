// TODO:

// 1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
// Each row should have info for one animal.
function newTable(data) {
  var tbody = $("tbody");
  tbody.empty();
  displayResults(data);
};

// 2. Make two AJAX functions that fire when users click the two buttons on index.html.
//     a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
$("#weight-sort").on("click", function() {
  if (($("#animal-weight").attr("class")) === "active") {
    $("#animal-weight").addClass("active");
    $("#animal-name").removeClass("active");
    $("#animal-class").removeClass("active");
    $("#animal-legs").removeClass("active");
    $.getJSON("/weight-asc", function(data) {
      newTable(data);
    });
  } else {
    $("#animal-weight").addClass("active");
    $("#animal-name").removeClass("active");
    $("#animal-class").removeClass("active");
    $("#animal-legs").removeClass("active");
    $.getJSON("/weight-desc", function(data) {
      newTable(data);
    })
  }
  
});
//     b. When the user clicks the Name button, the table should display the animal data sorted by name.
$("#name-sort").on("click", function() {
  $("#animal-name").addClass("active");
  $("#animal-weight").removeClass("active");
  $("#animal-class").removeClass("active");
  $("#animal-legs").removeClass("active");
  $.getJSON("/name", function(data) {
    newTable(data);
  })
});

$("#class-sort").on("click", function() {
  $("#animal-class").addClass("active");
  $("#animal-name").removeClass("active");
  $("#animal-weight").removeClass("active");
  $("#animal-legs").removeClass("active");
  $.getJSON("/class", function(data) {
    newTable(data);
  })
});

$("#legs-sort").on("click", function() {
  $("#animal-legs").addClass("active");
  $("#animal-name").removeClass("active");
  $("#animal-weight").removeClass("active");
  $("#animal-class").removeClass("active");
  $.getJSON("/legs", function(data) {
    newTable(data);
  })
});
// Good luck!

// *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
// What can we do to the table to accomplish this?

// *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
// *Bonus*: Add additional ways to sort (e.g. by class or number of legs)


// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
  var tbody = $("tbody");
  for (let i=0; i<data.length; i++) {
    
    var name = "<td>" + data[i].name + "</td>";
    var numLegs = "<td>" + data[i].numLegs + "</td>";
    var animalClass = "<td>" + data[i].class + "</td>";
    var animalWeight = "<td>" + data[i].weight + "</td>";
    var realName = "<td>" + data[i].whatIWouldReallyCallIt + "</td>";
    var newRow = "<tr>" + name + numLegs + animalClass + animalWeight + realName + "</tr>";
    console.log(newRow);
    tbody.append(newRow);
  }
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
