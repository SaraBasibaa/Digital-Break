
let timeLeft = 300;
let timerInterval = null;
let completedBreaks = 0;

const timerDisplay = document.getElementById("timer-display");
const timerMessage = document.getElementById("timer-message");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const completedCount = document.getElementById("completed-count");

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    if (timeLeft === 0) {
        return;
    }

    timerMessage.textContent = "Enjoy your peaceful break!";

    startButton.textContent = "Pause";

    timerInterval = setInterval(function() {
        timeLeft--;

        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerInterval = null;

            completedBreaks++;

            completedCount.textContent = completedBreaks;

            timerMessage.textContent =
                "Wonderful! Your break is complete.";

            startButton.textContent = "Start";
            alert("Great job! You completed your break.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    timerMessage.textContent = "Your break is paused.";
    startButton.textContent = "Start";
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    timeLeft = 300;

    updateTimer();

    timerMessage.textContent = "Ready for a peaceful break?";
    startButton.textContent = "Start";
}

startButton.addEventListener("click", function() {
    if (timerInterval === null) {
        startTimer();
    } else {
        pauseTimer();
    }
});

resetButton.addEventListener("click", resetTimer);

updateTimer();
