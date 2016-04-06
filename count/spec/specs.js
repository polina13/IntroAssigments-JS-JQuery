describe('count',function(){
   it("will return true, if output of number reaches 10", function() {
     expect(count(10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
   });

   it("will return true, if output of number reaches 30 and it increments by 5", function() {
     expect(count(30,5)).to.eql([5,10,15,20,25,30]);
   });
  it("will return false for a number greater than original given number",function(){
      expect(count(30,60)).to.equal("error");
  });
});
