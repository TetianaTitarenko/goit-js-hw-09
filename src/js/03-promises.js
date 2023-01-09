import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector(`input[name='delay']`);
const delayStep = document.querySelector(`input[name='step']`);
const amount = document.querySelector(`input[name='amount']`);
const createBtn = document.querySelector(`button`);


const amountSum = Number(amount.value);
const firstStep = Number(firstDelay.value);
const delay = Number(delayStep.value)
const position = 1

createBtn.addEventListener(`submit`, onStart);

function onStart(evt) {
  evt.preventDefault();
  for (let i = 0; i <= amountSum; i+=1) {
    position = +i;
    delay = +delay;
    
  createPromise().then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
          if (shouldResolve) {
        res({position, delay})
      } else {
        rej({position, delay})
      }
    }, firstStep)
  })
}

// createPromise().then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });