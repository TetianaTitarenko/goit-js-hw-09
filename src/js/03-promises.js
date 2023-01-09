const refs = {
  firstDelay: document.querySelector(`input[name='delay']`),
  delayStep: document.querySelector(`input[name='step']`),
  amount: document.querySelector(`input[name='amount']`),
  createBtn: document.querySelector(`button`),
}
console.log(refs);
const amountSum = refs.amount.value;
console.log(amountSum)

const delay = refs.firstDelay.value;
console.log(delay)

refs.createBtn.addEventListener(`submit`, onStart);

// Напиши скрипт, який на момент сабміту форми викликає функцію 
// createPromise(position, delay) стільки разів, скільки ввели 
// в поле amount. Під час кожного виклику передай їй номер промісу (position), 
// що створюється, і затримку, враховуючи першу затримку (delay), 
// введену користувачем, і крок (step).
// const amountSum = refs.amount.

function onStart(evt) {
  evt.preventDefault();
  for (let i = 0; i <= Number(amountSum); i+1) {
    const position = +i;
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) =>{
    if (shouldResolve) {
        res(position)
      } else {
        rej(position)
      }
  })
  return promise
 
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });