$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var foodInput = $("input#food").val();
    var musicInput= $("input#music").val();
    var destinationInput = $("input#destination").val();
    var colorInput = $("input#color").val();

    $(".person1").text(person1Input);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".destination").text(destinationInput);
    $(".color").append(colorInput);

    $("#survey").show();

    event.preventDefault();
  });
});
