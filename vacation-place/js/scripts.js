function Places(destination,season) {
  this.destination = destination;
  this.season= season;
  this.landmarks = [];
  this.activites= [];
}

Places.prototype.vacation = function () {
  return this.destination + " - " + this.season;
}

Landmarks.prototype.fullLandmark = function () {
  return this.beach + ", " + this.restaurant;
}

Activites.prototype.fullActivity = function () {
  return this.outdoor + ", " + this.indoor;
}

function Landmarks(beach, restaurant) {
  this.beach = beach;
  this.restaurant = restaurant;
}

function Activites(outdoor,indoor) {
  this.outdoor= outdoor;
  this.indoor= indoor;
}

$(document).ready(function(){
   $("form#vacationPlaces").submit(function (event) {
    event.preventDefault ();

    var inputteddestination = $("input#destination").val();
    var inputtedseasons = $("input#seasons").val();
    var inputtedbeach = $("input#beach").val();
    var inputtedrestaurant = $("input#restaurant").val();
    var inputtedindoor = $ ("input#indoor").val();
    var inputtedoutdoor = $("input#outdoor").val();

    var newDestination = new Places(inputteddestination, inputtedseasons);
    var newLandmarks = new Landmarks(inputtedbeach, inputtedrestaurant);
    var newActivity = new Activites(inputtedindoor, inputtedoutdoor);
    newDestination.landmarks.push(newLandmarks);
    newDestination.activites.push(newActivity);

    $("ul#destinationResult").append("<li>" + newDestination.vacation() + "</li>");

    $("#destinationResult li").last().click(function(){
      $(".show-destination").show();
      $(".show-destination h2").text(newDestination.vacation());
      newDestination.landmarks.forEach(function(landmark) {
        $("ul#landmarks").find('span').text(landmark.fullLandmark())
      });
      newDestination.activites.forEach(function(activity) {
        $("ul#activities").find('span').text(activity.fullActivity())
      });
    });
  });

});
