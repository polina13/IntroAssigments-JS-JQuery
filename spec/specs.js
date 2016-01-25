describe ('Contact', function () {
  it("creates a new contact with a given property", function () {
    var testContact = new Contact ("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function () {
    var testContact = new Contact ("Poli", "Nenchev");
    expect(testContact.fullName()).to.equal("Poli Nenchev");
  });
});

describe('Address', function(){
  it("creates a new address based on given properties", function() {
    var testAddress = new Address ("123 example st", "Portland", "OR")
    expect(testAddress.street).to.equal("123 example st");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("OR");
  });

  it("adds the newAddress method to all the addresses", function(){
    var testAddress = new Address ("123 example st", "Portland", "OR");
    expect(testAddress.newAddress()).to.equal("123 example st, Portland, OR");
  });
});
