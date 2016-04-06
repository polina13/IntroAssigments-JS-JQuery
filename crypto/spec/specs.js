describe('cookie', function() {
  it("should return false if contains punctiation", function() {
    expect(cookie("hello!")).to.equal(false);
  });

  it("should return false if inappropriate order of columns and rows", function() {
    expect(cookie("hello")).to.equal(false);
  });
});
