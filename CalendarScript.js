console.log(window.localStorage);

//Gets the current year and month
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

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

function gotoList (element) {
    const calendarMonth = document.getElementById("month").innerHTML;
    const calendarYear = document.getElementById("year").innerHTML;
    const calendarDay = element.innerHTML;
    window.localStorage.setItem("month",calendarMonth);
    window.localStorage.setItem("year",calendarYear);
    window.localStorage.setItem("day",calendarDay);

    window.location.href="To_Do_List.html";
}