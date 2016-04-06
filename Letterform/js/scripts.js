$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#story").show();

    event.preventDefault();
  });
});
