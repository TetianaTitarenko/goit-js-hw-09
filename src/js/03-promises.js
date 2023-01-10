import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector(`input[name='delay']`);
const delayStep = document.querySelector(`input[name='step']`);
const amount = document.querySelector(`input[name='amount']`);
const form = document.querySelector(`form`);

form.addEventListener(`submit`, onStart);

function onStart(evt) {
  evt.preventDefault();
  const amountSum = Number(amount.value);
  let firstStep = Number(firstDelay.value);
  const delay = Number(delayStep.value);
  for (let i = 1; i <= amountSum; i += 1) {
    createPromise(i, firstStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    firstStep += delay;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
};