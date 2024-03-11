function updateClock() {
    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    let time = hour + ":" + minutes + ":" + seconds;
    let date = day + "/" + month + "/" + year;

    document.getElementById("clock").innerHTML = time;
    document.getElementById("date").innerHTML = date;

    setTimeout(updateClock, 1000);
}

updateClock();