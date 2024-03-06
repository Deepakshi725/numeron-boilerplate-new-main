const timerDisplay = document.getElementById('timer');
const displaynumber1 = document.getElementById('number1');
const displaynumber2 = document.getElementById('number2');
const lessBtn = document.getElementById('lesser-than');
const equalBtn = document.getElementById('equal-to');
const greaterBtn = document.getElementById('greater-than');

let timer = 10;
let score = 0;

// Iteration 2: Generate 2 random number and display it on the screen

function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

function updateTimer() {
    timerDisplay.textContent = timer;
}

function updateNumber() {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    displaynumber1.textContent = number1;
    displaynumber2.textContent = number2;
}


// Iteration 4: Build a timer for the game

function startTimer() {
    updateNumber();
    const countdown = setInterval(() => {
        timer--;
        updateTimer();
        if (timer === 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000);

}

function endGame() {
    localStorage.setItem('score', score);
    window.location.href = 'gameover.html'; // Redirect to score page
}

function compareNumber(choice) {
    const number1 = parseInt(displaynumber1.textContent);
    const number2 = parseInt(displaynumber2.textContent);

    switch (choice) {
        case 'less':
            if (number1 < number2) {
                score++;
            }
            break;
        case 'equal':
            if (number1 === number2) {
                score++;
            }
            break;
        case 'greater':
            if (number1 > number2) {
                score++;
            }
            break;
        default:
            break;
    }

    updateTimer(); // Update timer display
    updateNumber();     // Update numbers for next comparison
    startTimer(); // Start timer for next comparison
}

// Iteration 3: Make the options button functional

lessBtn.addEventListener('click', () => compareNumber('less'));
equalBtn.addEventListener('click', () => compareNumber('equal'));
greaterBtn.addEventListener('click', () => compareNumber('greater'));

// Start the game

startTimer();
