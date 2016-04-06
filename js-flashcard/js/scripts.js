jQuery(document).ready(function() {

  $(".showme").click(function() {
    $(this).next(".hideme").show();
    $(this).last(".showme").hide();
  });


  $(".hideme").click(function() {
    $(".hideme").hide();
    $(".showme").show();
  });
});
