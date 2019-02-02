// Initialize Firebase
var config = {
    apiKey: "AIzaSyBveQhVPlAJQeLuU9H-J_X3p6LQb8N_AtQ",
    authDomain: "employee-timesheets-28b38.firebaseapp.com",
    databaseURL: "https://employee-timesheets-28b38.firebaseio.com",
    projectId: "employee-timesheets-28b38",
    storageBucket: "employee-timesheets-28b38.appspot.com",
    messagingSenderId: "623180166025"
};

firebase.initializeApp(config);

var database = firebase.database();

var ref = database.ref("/timesheets");

$("#submit-button").click(function(){
    event.preventDefault();
    var name = $("#name").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();
    var dateFormat = "MM/DD/YYYY";
    var convertedDate = moment(startDate, dateFormat);

    var monthsWorked = Math.abs((convertedDate.diff(moment(), "months")));
    // var totalBilled = parseInt(monthlyRate) * monthsWorked;
    // console.log(totalBilled);
    

    // var monthsWorked = 0;
    
    // function calcDate() {
    //     var date1 = startDate.getDate();
    //     var date2 = today.getDate();
    //     monthsWorked = date2 - date1;
    // };

    // calcDate();

    // var markup = "<tr><td>" + name + "</td><td>" + role + "</td><td>" + startDate + "</td><td></td><td>" + monthlyRate + "</td><td></td></tr>";
    // $("table tbody").append(markup);


    ref.push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        monthsWorked: monthsWorked,
      });
});


ref.on("child_added", function(snapshot, prevChildKey) {
    var newEntry = snapshot.val();
    console.log(newEntry);
    var name = newEntry.name;
    var role = newEntry.role;
    var startDate = newEntry.startDate;
    var monthlyRate = newEntry.monthlyRate;
    var monthsWorked = newEntry.monthsWorked;
    
    

    var markup = "<tr><td>" + name + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + monthsWorked + "</td><td>" + monthlyRate + "</td><td></td></tr>";
    $("table tbody").append(markup);
  });







