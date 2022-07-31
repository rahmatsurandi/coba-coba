const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");

const newYears = "29 sept 2022";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondEl.innerHTML = formatTime(seconds);
  function formatTime(time) {
    return time < 10 ? `${time}` : time;
  }
}

countdown();
setInterval(countdown, 1000);
