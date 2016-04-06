$(document).ready(function() {
  $("#blank form").submit(function(event){
    var userInput = $("input#user").val();

    $(".user").text((userInput.toUpperCase()));

    $("#story").show();

    event.preventDefault();
  });
});
