const body = document.querySelector("body");

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

stopBtn.setAttribute(`disabled`, true);
 
const changeColor = {
    IntervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true
        this.IntervalId = setInterval(() => {
            const color = getRandomHexColor();
            console.log(color);
            body.style.backgroundColor = color;
            startBtn.setAttribute(`disabled`, true);
            stopBtn.removeAttribute(`disabled`);
        }, 1000)
    },
    stop() {
        clearInterval(this.IntervalId)
        this.isActive = false
        startBtn.removeAttribute(`disabled`);
        stopBtn.setAttribute(`disabled`, true);
    },
}
    
startBtn.addEventListener(`click`, () => changeColor.start());
stopBtn.addEventListener(`click`, () => changeColor.stop());   

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}