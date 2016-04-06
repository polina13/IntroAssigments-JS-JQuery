var triangle = function(array) {
  if ( (array[0] + array[1])<=array[2] || (array[0]+ array[2])<=array[1] || (array[1]+ array[2]<=array[0]) ) {
    return false;
  } else if ((array[0] !== array[1]) && (array[0] !== array[2]) && (array[1] !== array[2])) {
    return "sc";
  } else if ((array[0] === array[1]) && (array[2] === array[1]) && (array[0] === array[2])) {
    return "eq";
  } else if ((array[0] === array[1]) || (array[2] === array[1]) || (array[0] === array[2])) {
    return "is";
  };
};

$(document).ready(function () {
  $("#sides").submit(function(event) {
  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());
  var arr = [side1, side2, side3];
  var result = triangle(arr);

  $(".result").show();

  if (!result) {
    $(".option").text("not")
  }else if (result === "sc"){
    $(".option").text("a scalene")
  }else if (result === "is") {
    $(".option").text("an isociles")
  } else if (result === "eq") {
    $(".option").text("an equilateral")
  };






    (event).preventDefault();
  });
});
