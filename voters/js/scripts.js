$(function() {
  var age=parseInt(prompt("What is your age?"));
  if (age >18) {
    $('#adults').show();
  } else if (age === 18) {
    $('#adults').show();
  } else if (age < 18) {
    $('#minors').show();
  }

});
