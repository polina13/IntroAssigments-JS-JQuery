function Movie(movieTitle, firstRelease){
  this.movieTitle = movieTitle;
  this.firstRelease = firstRelease;
  this.showTimes = [];
}

function Showtimes(time) {
  this.time = time;
  return this.time;
}

Showtimes.prototype.checkTime = function(time) {
  if (time => 17) {
    return false;
  } else {
    return true;
  }
}

function Age(age) {
  this.age = age;
  return this.age;
}

Age.prototype.checkSenior = function(age) {
  if(age => 65) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  var count;
  $('form#movie-choices').submit(function(event){
    event.preventDefault();
    var count = 10;
    var movieSelected = parseInt($("#movies option:selected").val());
    var timesSelected = parseInt($("#times option:selected").val());
    var agesSelected = parseInt($("#ages option:selected").val());

    // var newAge = new Age (agesSelected);
    if (agesSelected < 2) {
      count = count - 1
      console.log(count);
    }
    // var time = new Showtimes (timesSelected);
    if(timesSelected < 2) {
      count = count - 1
      console.log(count);
    }

    if(movieSelected < 2) {
      count = count - 1
      console.log(count);
    }

    $("#results").append("<p>Your tickets cost $ " + count + "!</p>");
  });
});
