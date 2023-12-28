var clock = new Date("Jan 29, 2024 03:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = clock - now;

    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000* 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    const d = days < 10 ? "0" + days : days;
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

   
    }, 1000);

