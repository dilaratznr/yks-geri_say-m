const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const countdown=document.getElementById("countdown");
const year=document.getElementById("year");


const currentYear=new Date().getFullYear();

year.innerHTML=currentYear;

const ExamTime=new Date(`June 26 ${currentYear} 10:00:00`);

function updateCountDown(){
    const currentTime=new Date();
    const diff=ExamTime - currentTime; /*it gives ms*/
    const d=Math.floor(diff/1000/60/60/24); 
    const h=Math.floor(diff/1000/60/60) %24; 
    const m=Math.floor(diff/1000/60) %60; 
    const s=Math.floor(diff/1000) %60; 
    //add values to dom
    days.innerHTML=d;
    hours.innerHTML=h<10 ? "0"+h:h;
    minutes.innerHTML=m<10 ? "0"+m:m;
    seconds.innerHTML=s<10 ? "0"+s:s;
}


setInterval(updateCountDown,)