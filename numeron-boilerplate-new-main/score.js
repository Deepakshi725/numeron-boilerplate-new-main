// Iteration 5: Store the player score and display it on the game over screen

const score = localStorage.getItem('score');
document.getElementById("score-box").textContent = score;
