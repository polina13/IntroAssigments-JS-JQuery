describe('triangle', function() {
  it("is false if the sum of two sides is less than or equal to the third side", function() {
    expect(triangle([3,4,10])).to.equal(false);
  });

  it("is true if all the side are not equal", function() {
    expect(triangle([3,4,5,])).to.equal(true);
  });

  it("is true if  two sides are equal", function() {
    expect(triangle([4,4,5,])).to.equal(true);
  });
  it("is true if all sides are equal", function() {
    expect(triangle([4,4,4,])).to.equal(true);
  });

});


// it("is true (scalene) if each side is of different length", function() {
//   expect(triangle([3,4,5])).to.equal(true);
// });
//
// it("is true (isosceles) two sides are equal", function () {
//   expect(triangle([4,4,5])).to.equal(true);
// });
//
// it("is true (haha) all sides equal", function () {
//   expect(triangle ([4,4,4,])).to.equal(true);
//     });
