const startTime = document.getElementById("start");
const pauseTime = document.getElementById("pause");
const resetTime = document.getElementById("reset");

const time = document.getElementById("timer");

let minute = 25;
let second = 0;
let timeId;

function formatTime(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function updateTimer() {
  time.innerHTML = `${formatTime(minute)}:${formatTime(second)}`;
}

updateTimer();

startTime.addEventListener("click", () => {
  if (!timeId) {
    timeId = setInterval(() => {
      if (second === 0) {
        if (minute === 0) {
          clearInterval(timeId);
          timeId = undefined;
          return;
        }
        second = 59;
        minute--;
      } else {
        second--;
      }
      updateTimer();
    }, 1000);
  }
});

pauseTime.addEventListener("click", () => {
  clearInterval(timeId);
  timeId = undefined;
});

resetTime.addEventListener("click", () => {
  clearInterval(timeId);
  timeId = undefined;
  minute = 25;
  second = 0;
  updateTimer();
});
