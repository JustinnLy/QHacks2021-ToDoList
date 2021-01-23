
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