describe('ToDo', function(){
  it("creates a task with user input", function() {
    var testTask = new ToDo ("Go to store");
    expect(testTask.task).to.equal("Go to store");
  });

  it("adds the Addtask method to all tasks", function () {
    var testTask = new ToDo ("Go to store");
    expect(testTask.addTask()).to.equal("Go to store");
  });

  it("adds the removeTask method to all the tasks", function(){
    var testTask = new ToDo ("Go to store");
    expect(testTask.removeTask()).to.equal("");
  });
});
