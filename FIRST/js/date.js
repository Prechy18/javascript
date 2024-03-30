// Date Object
/*

Time is an important thing. We like to know the time a certain activity or event. 
In JavaScript current time and date is created using JavaScript Date Object. The object 
we create using Date object provides many methods to work with date and time.The methods 
we use to get date and time information from a date object values are started with a word 
get because it provide the information.

getFullYear() - Get the year as a four digit number (yyyy)
getMonth() -  Get the month as a number (0 - 11)
getDate() - Get the day as a number (1 - 31)
getHours() - Get the hour (0 - 23)
getMinutes - Get the minute (0 - 59)
getSeconds() - Get the second (0 - 59)
getMilliseconds() - Get the millisecond(0 - 999)
getTime() - Get the time (milliseconds since January 1, 1970)
getDay() - Get the day of the week as a number (0 - 6)

*/

// creating a time object
let today = new Date();

let year = today.getFullYear();
console.log(year);

let month = today.getMonth() + 1;
console.log(month);

let date = today.getDate();
console.log(date);

let hour = today.getHours();
console.log(hour);

let minute = today.getMinutes();
console.log(minute);

let second = today.getSeconds();
console.log(second);

let millisecond = today.getMilliseconds();
console.log(millisecond);

let time = today.getTime();
console.log(time);

let day = today.getDay() + 1;
console.log(day);

let timeOutput = document.getElementById("time");

// function setTime() {
//   let today = new Date();

//   let hour = today.getHours();
//   let minute = today.getMinutes();
//   let second = today.getSeconds();
//   let amPm = hour < 12 ? "am" : "pm";

//   timeOutput.innerText = `${hour}:${minute}:${second} ${amPm}`;
// }

// let count = 0;

// function stopWatch() {
//   count++;
//   document.getElementById("stopwatch").innerText = `${count}`;
// }

// setInterval(setTime, 1000);

// let intervalId = null;
// function play() {
//   intervalId = setInterval(stopWatch, 1000);
// }

// function pause() {
//   clearInterval(intervalId);
// }

var times = 0;
var interval;
var display = document.getElementById("display")
var altBtns = document.getElementById("alt-btns")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")

function startTimer(){
  altBtns.innerHTML = "stop"
  if(interval){
    clearInterval(interval);
  }
  interval = setInterval(() => {
    time +=1
    display.innerHTML = Math.floor(time / 3600).toString() .padStart(2, "0" ) + 
    ":" + Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":"
     + Math.floor((time % 60)).toString().padStart(2, "0")
  }, 1000);
}

function stopTimer(){
  altBtns.innerHTML = "start"
  clearInterval(interval)
  interval = null
}

altBtns.onclick = function(){
  if(interval){
    stopTimer();
  }
  else{
    startTimer()
  }
}

reset.onclick = function(){
  altBtns.innerHTML = "start"
  if(interval){
    clearInterval(interval);
  }
  interval = null
time = 0;
display.innerHTML = "00:00:00";
}