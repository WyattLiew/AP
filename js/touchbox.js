// disable rightclick
document.addEventListener("contextmenu", event => event.preventDefault());

var isContentActive = 0;

// timer declare
var timeoutInMiliseconds = 120000;
var timeoutId;

function startTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
}

function doInactive() {
  // does whatever you need it to actually do - probably signs them out or stops polling the server for info
  
 // clear all the content
  gsap.to('.mainPage-Container',{
                duration:1,position:'relative'})

  // show Home page
  gsap.to('#homePage_scene',{duration:4,delay:1.5,opacity:1})
  isContentActive = 0;
  window.human = false;

  console.log("reset")

}

function resetTimer() {
  window.clearTimeout(timeoutId);
  if (isContentActive == 0) {
    startTimer();
  }
}

function setupTimers() {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  document.addEventListener("touchend", resetTimer, false);
  document.addEventListener("touchstart", resetTimer, false);

  startTimer();
}

// start timer
setupTimers();
