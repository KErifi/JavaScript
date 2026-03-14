// 1
function countdown(seconds) {
    function tick(remaining) {
        if (remaining >= 0) {
            console.log(`Осталось: ${remaining} сек`);
            setTimeout(() => tick(remaining - 1), 1000);
        } else {
            console.log("Время вышло!");
        }
    }

    tick(seconds);
}

countdown(5);

// 2
function remindWaterTest() {
    const interval = 5 * 1000;

    setInterval(() => {
        console.log("Не забудь выпить воды!");
    }, interval);
}

remindWaterTest();

// 3
let intervalId = null;

const startBtn = document.getElementById('startBtn');
const delayInput = document.getElementById('delay');
const textInput = document.getElementById('text');

startBtn.addEventListener('click', () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Таймер остановлен");
        return;
    }

    const delay = parseInt(delayInput.value);
    const text = textInput.value;

    if (isNaN(delay) || delay <= 0) {
        alert("Введите корректную задержку в миллисекундах!");
        return;
    }

    intervalId = setInterval(() => {
        console.log(text);
    }, delay);

    console.log("Таймер запущен");
});