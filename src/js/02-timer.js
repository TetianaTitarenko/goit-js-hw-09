import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const input = document.querySelector("#datetime-picker");
input.value = ``;

const timer = document.querySelector(".timer");
timer.style.display = "flex";
timer.style.gap = "10px";
timer.style.fontSize = "25px";

const startBtn = document.querySelector("button[data-start]");
startBtn.setAttribute(`disabled`, true);

let timeId = null;
let backTime = 0;

const daysDate = document.querySelector("[data-days]");
const hoursDate = document.querySelector("[data-hours]");
const minutesDate = document.querySelector("[data-minutes]");
const secondsDate = document.querySelector("[data-seconds]");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
        locale: {
        firstDayOfWeek: 1
    },
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options);

startBtn.addEventListener(`click`, onClickButton);

function onClickButton() {
  timeId = setInterval(() => {
    backTime = fp.selectedDates[0] - new Date();
    const updateTime = convertMs(backTime);
    console.log(updateTime)
    updateClock(updateTime);
    
    if (updateTime <= 900) {
    clearInterval(timeId)
          }
  }, 1000)
  
};

input.oninput = function () {
  if (fp.selectedDates[0] <= new Date()) {
    startBtn.setAttribute(`disabled`, true);
    Notify.failure('Please choose a date in the future');
  } else {
    startBtn.removeAttribute(`disabled`);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
 
function updateClock(
  { days, hours, minutes, seconds }) {
  daysDate.textContent = days.toString().padStart(2,0);
  hoursDate.textContent = hours.toString().padStart(2,0);;
  minutesDate.textContent = minutes.toString().padStart(2,0);;
  secondsDate.textContent = seconds.toString().padStart(2,0);;
}