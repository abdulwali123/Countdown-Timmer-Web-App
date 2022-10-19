const days=document.getElementById('day');
const hours=document.getElementById('hour');
const minutes=document.getElementById('minute');
const seconds=document.getElementById('second');

// Our countDown function 

function countdown() {
    let currentDate=new Date();
    let EventDate=new Date("1 jan 2023");
    let totalDaysLeft=(EventDate-currentDate)/1000;
    days.innerHTML=format(Math.floor(totalDaysLeft/3600/24));
    hours.innerHTML=format(Math.floor((totalDaysLeft/3600%24)));
    minutes.innerHTML=format(Math.floor((totalDaysLeft/60%60)));
    seconds.innerHTML=format(Math.floor((totalDaysLeft)%60));
    
}

setInterval(countdown,1000)
function format(time) {
    return time<10? `0${time}`: time;
}