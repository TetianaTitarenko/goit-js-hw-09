import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const input = document.querySelector("#datetime-picker");
input.value = ``;
const button = document.querySelector("button");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

const options = {
  enableTime: true,
  time_24hr: true,
  // defaultDate: new Date(),
    minuteIncrement: 1,
        locale: {
        firstDayOfWeek: 1
    },
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options);

const endDate = fp.selectedDates[0];
console.log(endDate)


button.addEventListener(`click`, onClickButton);
input.addEventListener(`change`, addDate)

function onClickButton() {

  let timeId = setInterval(() => {

    const currentDate = new Date();
    console.log(currentDate)

    // const ms = endDate.getTime() - currentDate.getTime();
    const ms = endDate - currentDate;
    console.log(ms);
    
    if (ms <= 0) {
    clearInterval(timeId)
          }
  }, 1000)
  
};

function addDate() {
    if (fp.selectedDates[0] <= new Date()) {
    Notify.failure('Please choose a date in the future');
  }
  return
}

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

