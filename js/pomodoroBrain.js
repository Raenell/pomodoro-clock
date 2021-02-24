function incrementBreak() {
  let breakLength = document.getElementById("break-length");

    if (breakLength.innerHTML >= 60) {
    } else {
      breakLength.innerHTML = parseFloat(breakLength.innerHTML) + 1;
      }
   }

function decrementBreak() {
  let breakLength = document.getElementById("break-length");

  if (breakLength.innerHTML <= 1) {

  } else {
    breakLength.innerHTML = parseFloat(breakLength.innerHTML) - 1;
  }
}

function incrementSession() {
  let sessionLength = document.getElementById("session-length");
  let minutes = document.getElementById("minutes");

  if (sessionLength.innerHTML >= 60) {
    } else {
      sessionLength.innerHTML = parseFloat(sessionLength.innerHTML) + 1;
      minutes.innerHTML = parseFloat(minutes.innerHTML) + 1;
    }
  }

function decrementSession() {
  let sessionLength = document.getElementById("session-length");
  let minutes = document.getElementById("minutes");

  if (sessionLength.innerHTML <= 1) {

  } else {
    sessionLength.innerHTML = parseFloat(sessionLength.innerHTML) - 1;
    minutes.innerHTML = parseFloat(minutes.innerHTML) - 1;
  }
}

function reset() {
  let breakLength = document.getElementById("break-length");
  let sessionLength = document.getElementById("session-length");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let timerLabel = document.getElementById("timer-label");
  let x = document.getElementById("beep");

  clearInterval(timer);

  x.load();
  timerLabel.innerText = "Session Initialized";
  breakLength.innerHTML = 5;
  sessionLength.innerHTML = 25;
  minutes.innerHTML = 25;
  seconds.innerHTML = "0" + 0;
  timerRunning = false;
}

//Function in progress
//Creating a countdown timer

let timerRunning = false;
let breakTimer = false;
let timer = null;
let x = document.getElementById("beep");


function start_stopTimer(){
  let x = document.getElementById("beep");

  x.load();
  if (timerRunning === false){
    timer =  setInterval(runningTimer, 1000);
    timerRunning = true;
  } else {
    clearInterval(timer);
    timerRunning = false;
  }
}

function runningTimer(){
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let breakLength = document.getElementById("break-length");
  let sessionLength = document.getElementById("session-length");
  let timerLabel = document.getElementById("timer-label");
  let x = document.getElementById("beep");


  if (minutes.innerHTML <= 0 && seconds.innerHTML <= 0 && breakTimer === false) {
    //stop condition then begin break
    x.play();
    if (breakLength.innerText < 10) {
      minutes.innerText = "0" + breakLength.innerText;
    } else {
      minutes.innerText = breakLength.innerText;
    }
    seconds.innerText = "00";
    timerLabel.innerText = "Break Time";
    breakTimer = true;

  } else if(minutes.innerHTML <= 0 && seconds.innerHTML <= 0 && breakTimer === true) {
    //stop condition then begin session
    x.play();
    if (sessionLength.innerText < 10) {
      minutes.innerText = "0" + sessionLength.innerText;
    } else{
      minutes.innerText = sessionLength.innerText;
    }
    seconds.innerText = "00"
    timerLabel.innerText = "Session Time";
    breakTimer = false;

  } else{

    //convert to milliseconds
    var timeLeft = (parseFloat(minutes.innerHTML) * 60 * 1000) + (parseFloat(seconds.innerHTML) * 1000);
    var breakTimeLeft = (parseFloat(breakLength.innerHTML) * 60 * 1000);

    //subtract a second
    timeLeft -= 1000;

    //convert back to mm:ss
    var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (minutesLeft < 10) {
      minutesLeft = "0" + minutesLeft;
    }
    if (secondsLeft < 10) {
      secondsLeft = "0" + secondsLeft;
    }

    //display
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

  }
}
