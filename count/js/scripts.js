
var count = function(num1,num2) {
  var array = [];
  for (var i = num2; i <= num1; i = i+num2) {
    array.push(i + "");
  }
  if (num2 > num1 ){
    return "error";
  }else{
    return array;
}
};

$(document).ready(function(){
  $("form").submit(function(event){
  var num1 = parseInt($("input#num1").val());
  var num2 = parseInt($("input#num2").val());
  var result = count(num1,num2);
  console.log(result);
  $("#output").text(result);

  event.preventDefault();
  });
});
