console.log(window.localStorage);

function gotoList (element) {
    const month = document.getElementById("month").innerHTML;
    const year = document.getElementById("year").innerHTML;
    const day = element.innerHTML;
    window.localStorage.setItem("month",month);
    window.localStorage.setItem("year",year);
    window.localStorage.setItem("day",day);

    window.location.href="To_Do_List.html";
}