describe('Places', function () {
  it("creates a new place with given properties", function () {
    var testPlace = new Places ("Hawaii", "summer");
    expect(testPlace.destination).to.equal("Hawaii");
    expect(testPlace.season).to.equal("summer");
    expect(testPlace.landmarks).to.eql([]);
    expect(testPlace.activites).to.eql([]);
  });

  it("adds the Vacation method to all places", function () {
    var testPlace = new Places ("Hawaii", "summer");
    expect(testPlace.vacation()).to.equal("Hawaii - summer");
  });
});

describe('Landmarks', function () {
  it("creates a landmark with given properties", function () {
    var testLandmark = new Landmarks ("maui", "kona grill");
    expect(testLandmark.beach).to.equal("maui");
    expect(testLandmark.restaurant).to.equal("kona grill");
  });

  it("adds the fullLandmark method to the objects", function(){
    var testLandmark = new Landmarks ("maui", "kona grill");
    expect(testLandmark.fullLandmark()).to.equal("maui, kona grill");
  });
});

describe('Activites', function () {
  it("creates an activity with given properties", function () {
    var testActivity = new Activites ("camping", "dancing");
    expect(testActivity.outdoor).to.equal("camping");
    expect(testActivity.indoor).to.equal("dancing");
  });

  it("adds the fullActivity method to the objects", function(){
    var testActivity = new Activites ("camping", "dancing");
    expect(testActivity.fullActivity()).to.equal("camping, dancing");
  });
});
