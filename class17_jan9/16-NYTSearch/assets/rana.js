$("#run-search").on("click", function(event) {
    event.preventDefault()
    var searchTerm = $("#search-term").val().trim(); //We'll pull this term from what user enters in the Search Term field
    console.log(searchTerm);
    var beginDate = "&begin_date="
    var startYear = $("#start-year").val().trim(); //We'll pull this term from what user enters in Start Year field
    var datePeriod = "0101&end_date=";
    var endYear = $("#end-year").val().trim(); //We'll pull this term from what user enters in End Year field
    var urlEnd = "1231";
    var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";
    var queryURL = urlBase + searchTerm + beginDate + startYear + datePeriod + endYear + urlEnd;
    console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
      })
      var results = response.data;
      $(".panel-body").append(results);
});