const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let dayNum = date.getDate();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//Updates HTML to get current date
document.getElementById("day").innerHTML = days[day] + ",";
document.getElementById("month").innerHTML = months[month];
document.getElementById("numDay").innerHTML = dayNum + ",";
document.getElementById("year").innerHTML = year;

let taskToday = `taskList${months[month]} ${dayNum} ${year}`;

//Prints the x amount of tasks to do for the current day
if(typeof(window.localStorage[taskToday]) !== "undefined" && window.localStorage[taskToday] !== ""){
    let taskArray = window.localStorage[taskToday].split(",");

    if(taskArray.length == 1){
        document.getElementById("todo").innerHTML = `<span>${taskArray.length}</span> task to do today`;
    }
    else{
        document.getElementById("todoNum").innerHTML = taskArray.length;
    }
}

function reset(){
    window.localStorage.clear();
    document.getElementById("todo").innerHTML = "<span>0</span> tasks to do today";
}