console.log(window.localStorage);

//Updates to the date that was clicked from the calendar
const headerDate = document.getElementById("date");
headerDate.innerHTML = window.localStorage.month + " " + window.localStorage.day + " " + window.localStorage.year;
//key names
var taskListKey;
var completeListKey;
//searches for valid keys that corrisponds to the date
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
//if there are values saved within the key then load the data
if(!(taskListKey in window.localStorage) && !(completeListKey in window.localStorage) ){
    console.log("empty");
}
else if(window.localStorage[`${taskListKey}`] !== "" || window.localStorage[`${completeListKey}`] !== ""){
    console.log(window.localStorage);
    console.log(window.localStorage[`${taskListKey}`]);
    loadTask(window.localStorage[`${taskListKey}`],window.localStorage[`${completeListKey}`]);
    //resets the "key" variables
    taskListKey ="";
    completeListKey="";
}
//runs the function updateTask if the user hits Enter when in the textbox
document.getElementById("task1").addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        updateTask();
    }});
 //loads the tasklist onto the HTML page  
function loadTask(taskList, completeList){
     taskList = arrayify(taskList);
     completeList = arrayify(completeList);

    const toBeDone = document.getElementById("tobedone");
    const completed = document.getElementById("complete");
    //loads all tasks that need to be completed 
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
    //loads all tasks that are completed 
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
        //save local changes
        saveLocal();
        
    

}
//moves a task from the 'To Do' section to the 'Completed' section
function moveTask(){
    //obtains all checkbox elements
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    const completed =document.getElementById("complete");
    //iterates through all of the checkbox elements to check which ones are ticked 
    for(var i =0; i < checkbox.length;i++){
        //if ticked then move task to completed section
        if(checkbox[i].checked){
            var o = checkbox[i].parentElement;
            o.removeChild(checkbox[i]);
            o.firstChild.className = 'done';
            completed.appendChild(o);
            //save local changes
            saveLocal();
           
        }
    }   
}
//save the entire task list onto local storage
function saveLocal(){
    //complies all of the tasks that need to be completed
    const taskList = document.querySelectorAll('p.taskName');
    //compiles all of the tasks that are completed
    const completeList = document.querySelectorAll('p.done');
    var taskListArr =[];
    var completeListArr=[];
    //puts all of the uncompleted tasks into an array
    for(var i =0; i < taskList.length;i++){
            taskListArr.push(taskList[i].innerHTML);

    }
    //puts all of the completed tasks into an array
    for(var i =0 ;i < completeList.length;i++){
            completeListArr.push(completeList[i].innerHTML);
    }
    //creates the appropriate keys for unfinished and finished tasks
    var taskListKey = "taskList" + window.localStorage.month +" "+  window.localStorage.day +" " + window.localStorage.year;
    var completeListKey = "completeList" + window.localStorage.month +" " + window.localStorage.day + " " +window.localStorage.year;
    //store key and array in local storage
    window.localStorage.setItem(taskListKey, taskListArr);
    window.localStorage.setItem(completeListKey,completeListArr);

}
//functions that turns a string into an array by using a ',' as the delimiter
function arrayify(string){
    return string.split(",");


}