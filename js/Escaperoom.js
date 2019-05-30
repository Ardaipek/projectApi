'use strict';

function startTimer(duration, toonTijd) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        toonTijd.textContent = minutes + ":" + seconds;

        if (--timer < 0) {

            toonTijd.textContent = 'Tijd is op';
            location.replace("lostPage.html");
        }
    }, 1000);

}
window.onload = function () {
    var tenMinutes = 60 * 0.15,
        toonTijd = document.querySelector('#demo');
    startTimer(tenMinutes, toonTijd);
    console.log(tenMinutes);
};
