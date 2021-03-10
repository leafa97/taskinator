
var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").Value;
  // check if inputs are empty 
  if (taskNameInput === "" || taskTypeInput === "") {
  alert("You need to fill out the task form!");
  return false;
  }

  formE1.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput
  };

  createTaskEl(taskDataObj);
  };
var createTaskEl = function(taskDataObj) {
  //create list item
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  
  //create div to hold task info and add to list item
  var taskInfoE1 = document.createElement("div");
  //give class name
  taskInfoE1.className = "task-info";
  //add HTML content to div
  taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class ='task-type'>" + taskTypeInput + "</span>";
  listitemE1.appendchild(taskInfoE1);
  //add entire list item to list
  tasksToDoE1.appendchild(listItemE1);

};
formE1.addEventListener("submit", createTaskHandler);

