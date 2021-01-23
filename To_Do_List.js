console.log(window.localStorage);

//Updates to the date that was clicked from the calendar
const headerDate = document.getElementById("date");
headerDate.innerHTML = window.localStorage.month + " " + window.localStorage.day + " " + window.localStorage.year;

document.getElementById("task1").addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        updateTask();
    }});
function updateTask () {
    //gets task from textbox    
    const Task = document.getElementById("task1").value;
    //checks if the user entered nothing
    if(Task == ''){
        alert('please Enter a Task!');
        return;
    }

    //gets Task Left to be Completed column
    const ToBeDone = document.getElementById("tobedone");
    
    //makes a new div, p and checkbox element
    const newTask = document.createElement("div");
    const taskName = document.createElement("p");
    const checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.id="check";
    taskName.textContent = Task;


    newTask.classList.add("textbox");
    var taskList = document.querySelectorAll('p');

    //checks if task name is already on the list
    for(var i =0; i<taskList.length;i++){
        if(taskList[i].innerHTML === taskName.innerHTML){
            alert("Task is already on the list!");
            return;
        }
    }
    //if not on list then add task name to the list
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