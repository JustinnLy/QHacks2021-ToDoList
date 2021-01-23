
function updateTask () {
    
    const Task = document.getElementById("task1").value;

    const ToBeDone = document.getElementById("tobedone");
    const newTask = document.createElement("div");
    const taskName = document.createElement("p");
    const checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.id="check";
    taskName.textContent = Task;
    newTask.classList.add("textbox");

    newTask.appendChild(checkBox);
    newTask.appendChild(taskName);
    ToBeDone.appendChild(newTask);
   

}

function moveTask(){
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    const completed =document.getElementById("complete");
    for(var i =0; i < checkbox.length;i++){
        if(checkbox[i].checked){
            var o = checkbox[i].parentElement;
            o.removeChild(checkbox[i]);
            completed.appendChild(o);
            
        }
    }
}