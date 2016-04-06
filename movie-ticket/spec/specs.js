describe("Movie", function(){
  it('will create a movie object based on the given properties', function(){
      var newMovie = new Movie ("Shrek", true, 20);
      expect(newMovie.movieTitle).to.equal("Shrek");
      expect(newMovie.firstRelease).to.equal(true);
      expect(newMovie.showTimes).to.eql([]);
  });
});
describe("Ticket", function() {
  describe("Showtimes", function(){
    it('will create showtimes based on the given properties', function(){
      var testShowTimes = new Showtimes (13);
      expect(testShowTimes.time).to.equal(13);
    });

    it('will check if matinee or not', function(){
      var testShowTimes = new Showtimes (13);
      expect(testShowTimes.checkTime()).to.equal(false);
    });
  });

  describe("Age", function() {
    it('will define the age group given properties', function() {
      var testAge= new Age (65);
      expect(testAge.age).to.equal(65);
    });

    it("will check if senior or not", function() {
      var testAge = new Age (65);
      expect(testAge.checkSenior()).to.equal(true);
    });
  });
});
