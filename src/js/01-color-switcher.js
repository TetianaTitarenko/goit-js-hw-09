const body = document.querySelector("body");

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
 
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
        }, 1000)
    },
    stop() {
        clearInterval(this.IntervalId)
        this.isActive = false
    },
}
    
startBtn.addEventListener(`click`, () => changeColor.start());
stopBtn.addEventListener(`click`, () => changeColor.stop());   

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}