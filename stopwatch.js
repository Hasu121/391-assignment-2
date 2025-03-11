let timer;
let seconds = 0;
const stopwatch = document.getElementById("stopwatch");

function startStopwatch(){
  if (!timer) {
    timer = setInterval(updateStopwatch, 3000); // Increment every 3 seconds
  }
}

function stopStopwatch(){
  clearInterval(timer);
  timer = null;
}

function resetStopwatch(){
  clearInterval(timer);
  timer = null;
  seconds = 0;
  stopwatch.textContent = seconds;
}

function updateStopwatch(){
  seconds += 3;
  if (seconds > 30) {
    clearInterval(timer);
    timer = null;
    seconds = 30;
  }
  stopwatch.textContent = seconds;
}