$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var gender = $("select#gender").val();
    var food = $("select#food").val();
    var drink = $("select#drink").val();


    if (gender === 'male' && food === 'vegetarian' && drink === 'wine') {
      $("#person1").show()
      $("#person2").hide()}

    if (gender === 'female' && food === 'mexican' && drink === 'liquor') {
      $("#person2").show()}

    if (gender === 'male' && food === 'mexican' && drink === 'wine') {
      $("#person3").show()}

    if (gender === 'female' && food === 'mediterranean' && drink === 'beer') {
      $("#person4").show()}

    else {
      $("#error").show();
      $("#error").hide();

      }



    //
    // if (gender === 'female' && food === 'mexican' || 'mediterranean' && drink !== 'wine') {
    // } $("#person2").show()


    // $("#gender").empty().append("quote");
    // $("#quote").show();
    // return false;
    //
    // if (gender === 'female' && food === 'mexican' || 'mediterranean' && drink !== 'wine') {
    // } else {
    //
    // }

    event.preventDefault();
  });
});
