$(document).ready(function() {
  $(".types-click").click(function() {
    $(".types-hide").toggle();
    $(".types-show").toggle();
  });
  $(".variables-click").click(function() {
    $(".variables-hide").toggle();
    $(".variables-show").toggle();
  });
  $(".parameters-click").click(function() {
    $(".parameters-hide").toggle();
    $(".parameters-show").toggle();
  });
  $(".operators-click").click(function() {
    $(".operators-hide").toggle();
    $(".operators-show").toggle();
  });
  $(".functions-click").click(function() {
    $(".functions-hide").toggle();
    $(".functions-show").toggle();
  });
  $(".comments-click").click(function() {
    $(".comments-hide").toggle();
    $(".comments-show").toggle();
  });
});
