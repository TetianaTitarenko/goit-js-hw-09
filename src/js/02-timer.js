import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// console.log(Notify);
// Попередження
// Notify.failure('Please choose a date in the future');

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
console.log(button);
const days = document.querySelector("[data-days]");
console.log(days);
const hours = document.querySelector("[data-hours]");
console.log(hours);
const minutes = document.querySelector("[data-minutes]");
console.log(minutes);
const seconds = document.querySelector("[data-seconds]");
console.log(seconds);

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
console.log(fp.selectedDates[0]);






