$(document).ready(function() {
  $("button#meow").click(function() {
    $("img#catImg").show();
    $("img#dogImg").hide();
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#cat").children("li").first().click(function() {
    $(this).remove();
    $("ul#dog").children("li").first().click(function() {
    $(this).remove();
});
  });
  });
  $("button#woof").click(function() {
    $("img#catImg").hide();
    $("img#dogImg").show();
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#cat").children("li").first().click(function() {
    $(this).remove();
    $("ul#dog").children("li").first().click(function() {
    $(this).remove();
});
});
});

$("button#invert").click(function() {
  $("body").toggleClass("invert-background-text");
});
});
