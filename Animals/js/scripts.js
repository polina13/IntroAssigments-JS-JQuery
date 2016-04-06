$(function() {
  var animal = prompt("Would you like to learn about snakes, turtles, or insects?");
  if (animal === "snakes") {
    $('#snake').show();
  }
  if (animal === "turtles") {
    $('#turtle').show();
  }
  if (animal === "insects") {
    $('#insect').show();
  }

  else if (animal !== undefined) {
  $('#other').show();
  }

});
