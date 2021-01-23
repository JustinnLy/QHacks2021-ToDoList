console.log(window.localStorage);

//Updates to the date that was clicked from the calendar
const headerDate = document.getElementById("date");
headerDate.innerHTML = window.localStorage.month + " " + window.localStorage.day + " " + window.localStorage.year;

function updateTask () {
    
    const Task = document.getElementById("task1").value;

    const ToBeDone = document.getElementById("tobedone");
    const newTask = document.createElement("div");
    const taskName = document.createElement("p");
    const checkBox = document.createElement("input");
    checkBox.type="checkbox";

    taskName.textContent = Task;
    newTask.classList.add("textbox");

    newTask.appendChild(checkBox);
    newTask.appendChild(taskName);
    ToBeDone.appendChild(newTask);
   

}

function moveTask(){


}