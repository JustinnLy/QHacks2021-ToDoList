console.log(window.localStorage);

//Gets the current year and month
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

setDate(month,year);

//Sets the calendar with the proper date
function setDate(month,year) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;

    //Gets first and last day(0-6) of a month
    let firstDay = new Date(year,month,1).getDay();
    //Gets the last Date(0-31) of a month
    let lastDay = new Date(year,month+1,0).getDate();

    //Shifts the calendar days to match the month
    const firstDayElement = document.getElementById("one");
    firstDayElement.style.gridColumn = firstDay + 1;

    //Displays the correct number of days of a month
    if(lastDay == 28){
        document.getElementById("twoNine").style.display = "none";
        document.getElementById("threeZero").style.display = "none";
        document.getElementById("threeOne").style.display = "none";
    }
    else if(lastDay == 29){
        document.getElementById("threeZero").style.display = "none";
        document.getElementById("threeOne").style.display = "none";  
    }
    else if(lastDay == 30){
        document.getElementById("threeOne").style.display = "none"; 
    }
    else{
        document.getElementById("twoNine").style.display = "inline";
        document.getElementById("threeZero").style.display = "inline";
        document.getElementById("threeOne").style.display = "inline";
    }
}

//Calls setDate for the next month
function nextMonth() {
    if(month < 11){
        month++;
        setDate(month,year);
    }
    else{
        month = 0;
        year++;
        setDate(month,year);
    }
}

//Calls setDate for the prev month
function prevMonth() {
    if(month > 0){
        month--;
        setDate(month,year);
    }
    else{
        month = 11;
        year--;
        setDate(month,year);
    }
}

//Goes to the task list when user clicks on a day
function gotoList (element) {
    const calendarMonth = document.getElementById("month").innerHTML;
    const calendarYear = document.getElementById("year").innerHTML;
    const calendarDay = element.innerHTML;
    window.localStorage.setItem("month",calendarMonth);
    window.localStorage.setItem("year",calendarYear);
    window.localStorage.setItem("day",calendarDay);

    window.location.href="To_Do_List.html";
}