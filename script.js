
// Trixie's Birthday

const days_elem = document.getElementById('days');
const hours_elem = document.getElementById('hours');
const mins_elem = document.getElementById('minutes');
const secs_elem = document.getElementById('seconds');

const trixieBday = "3 Aug 2021";


let countdown = () => {

    const trixieDay = new Date(trixieBday);
    const currentDay = new Date();
    let totalSec = (trixieDay - currentDay) / 1000;

    const days = Math.floor(totalSec / (86400));

    totalSec = totalSec % (24*3600);

    const hours = Math.floor(totalSec/3600);

    totalSec = totalSec % 3600;


    const mins = Math.floor( totalSec/ 60 );

    totalSec = totalSec % 60;

    const secs = Math.floor(totalSec);

    console.log(days,hours,mins,secs);

    days_elem.innerHTML = formatTime(days);
    hours_elem.innerHTML = formatTime(hours);
    mins_elem.innerHTML = formatTime(mins);
    secs_elem.innerHTML = formatTime(secs);
}

function formatTime(time){
    // if time is less than 10 THEN append 0 else return time
    return time < 10 ? (`0${time}`) : time; 
}

// Initial call
countdown();
setInterval(countdown,1000);