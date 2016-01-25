function Contact(firstName, lastName) {
  this.firstName= firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

function Address(street,city,state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.newAddress = function () {
  return this.street + ", " + this.city + ", " + this.state;
}

function resetFields (){
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}

$(document).ready(function(){
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    var inputtedfFirstName = $('input#new-first-name').val();
    var inputtedfLastName = $('input#new-last-name').val();
    var newContact = new Contact(inputtedfFirstName, inputtedfLastName, inputtedStreet, inputtedCity, inputtedState);

    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var fullAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(fullAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    // $("ul#addresses").append("<li><span class= 'address'>" + fullAddress.newAddress() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").prepend("<li>" + address.newAddress() + "</li>")
      });
    });
    resetFields();
  });
});
