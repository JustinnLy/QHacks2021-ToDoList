console.log(window.localStorage);

//Updates to the date that was clicked from the calendar
const headerDate = document.getElementById("date");
headerDate.innerHTML = window.localStorage.month + " " + window.localStorage.day + " " + window.localStorage.year;
//checks if there are any tasks saved on local storage if so load it
var taskListKey;
var completeListKey;
for(var key in window.localStorage){
    if(key.includes(window.localStorage.month) && key.includes(" " + window.localStorage.day + " ") && key.includes(window.localStorage.year)){
        if(key.startsWith("task")){
            taskListKey =key;
        }
        else if(key.startsWith("complete")){
            completeListKey = key;
        }
    }

}
if(window.localStorage[`${taskListKey}`] !== "" || window.localStorage[`${completeListKey}`] !== ""){
    console.log(window.localStorage);
    console.log(window.localStorage[`${taskListKey}`]);
    loadTask(window.localStorage[`${taskListKey}`],window.localStorage[`${completeListKey}`]);
    taskListKey ="";
    completeListKey="";
}

document.getElementById("task1").addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        updateTask();
    }});
function loadTask(taskList, completeList){
     console.log(taskList);
     taskList = arrayify(taskList);
     completeList = arrayify(completeList);

    const toBeDone = document.getElementById("tobedone");
    const completed = document.getElementById("complete");
    //need to put taskList in array format
    for(var i =0; i < taskList.length;i++){
        if(taskList[i]!== ""){
            const task = document.createElement("div");
            const taskName = document.createElement("p");
            const checkBox = document.createElement("input");
            checkBox.type="checkbox";
            checkBox.id="check";
            taskName.textContent = taskList[i];
            taskName.className='taskName';
            task.classList.add("textbox");
            task.appendChild(checkBox);
            task.appendChild(taskName);
            toBeDone.appendChild(task);
        }
    }
    // need to put completeList into array format
    for(var j =0; j < completeList.length;j++){
        if(completeList[j] !== ""){
            const task = document.createElement("div");
            const taskName = document.createElement("p");
            taskName.textContent = completeList[j];
            taskName.className='done';
            task.classList.add("textbox");
            task.appendChild(taskName);
            completed.appendChild(task);
        }
    }

}
//updates task when user submits a new task to be added to the list
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
    taskName.className="taskName";


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
        saveLocal();
        console.log(window.localStorage);
    

}

function moveTask(){
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    const completed =document.getElementById("complete");
    for(var i =0; i < checkbox.length;i++){
        if(checkbox[i].checked){
            var o = checkbox[i].parentElement;
            o.removeChild(checkbox[i]);
            o.firstChild.className = 'done';
            completed.appendChild(o);
            saveLocal();
            console.log(window.localStorage);
        }
    }   
}

function saveLocal(){
    const taskList = document.querySelectorAll('p.taskName');
    const completeList = document.querySelectorAll('p.done');
    var taskListArr =[];
    var completeListArr=[];
    for(var i =0; i < taskList.length;i++){
            taskListArr.push(taskList[i].innerHTML);

    }
    for(var i =0 ;i < completeList.length;i++){
            completeListArr.push(completeList[i].innerHTML);
    }
    var taskListKey = "taskList" + window.localStorage.month +" "+  window.localStorage.day +" " + window.localStorage.year;
    var completeListKey = "completeList" + window.localStorage.month +" " + window.localStorage.day + " " +window.localStorage.year;
    window.localStorage.setItem(taskListKey, taskListArr);
    window.localStorage.setItem(completeListKey,completeListArr);

}

function arrayify(string){
    return string.split(",");


}