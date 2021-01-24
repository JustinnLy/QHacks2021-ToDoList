const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let dayNum = date.getDate();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("day").innerHTML = days[day];
document.getElementById("month").innerHTML = months[month];
document.getElementById("numDay").innerHTML = dayNum;
document.getElementById("year").innerHTML = year;