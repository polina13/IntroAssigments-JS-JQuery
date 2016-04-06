var cookie = function(phrase) {
  if (   (phrase.indexOf("!") !== -1) || (phrase.indexOf(".") !== -1) || (phrase.indexOf(";") !== -1)
      || (phrase.indexOf("?") !== -1)  || (phrase.indexOf(",") === -1)  ) {
    return false;
  }

  var array = [];
  for (var i=0; phrase.length <= i*i; i ++) {
    array[i] = new Array();
    if(phrase.length >= i*i ) {
      
      return true
    }
    var array + i = []
  }
};
