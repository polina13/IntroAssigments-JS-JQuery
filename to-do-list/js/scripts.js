function ToDo(task) {
  this.task = task;
}

ToDo.prototype.addTask = function(){
  return this.task;
}
ToDo.prototype.removeTask = function () {
  return "";
}

function resetField (){
  $("input#todo").val("");
}

$(document).ready(function() {
  $("form.todo-list").submit(function(event) {
    event.preventDefault();
    var inputtedtask = $("input#todo").val();
    var newTask = new ToDo(inputtedtask);

    if(inputtedtask === ""){
      alert("Please enter a task")
    } else {
      $("ul.to-do-task").append('<li><input type="checkbox" name="tasks">'+ newTask.addTask() + '<span class="task"></span></li>');

      $('#removeBtn').click(function(){
        $('input[name="tasks"]:checked').each(function(){
          $(this).parent().remove();
        });
      });
    }
    resetField();
  });
});
