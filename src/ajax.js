$(document).ready(function() {
   readJSON();
 });

function readJSON(){
   $.ajax({
      type: "GET",
      url: "src/header.json",
      dataType: "json",
      success: function(responseData, status){
      var output = "<ul>";
      count = 0;
      $.each(responseData.nav, function(i, nav) {
          output += '<li class="title"><a href="' + nav.navURL  + '">';
          if(count == 0){
             output += '<img src="' + nav.navName + '"/>';
             count = 1;
          }else{
            output += nav.navName;
          }   
          output += '</a></li>';
      });
      output += "</ul>";
      console.log(output);
      $('header').html(output);
    }, error: function(msg) {
            // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
    });
}