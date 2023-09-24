const timeElement = document.getElementById("timer");
const scoresElement = document.getElementById("scores");
const homeElement = document.getElementById("homePage");
const questionsElement = document.getElementById("questions");
const questionTitleElement = document.getElementById("questionTitle");
const answersElement = document.getElementById("answers");
const endScreenElement = document.getElementById("endScreen");
const finalScoreElement = document.getElementById("finalScore");
const initialsElement = document.getElementById("initials");
const submitElement = document.getElementById("submit");
const startButtonElement = document.getElementById("startButton");
let timeLeft = 3 * 15;
let seconds;

//TODO: function that starts the timer and update it on the page
//TODO: function that gets the questions
//TODO: function that interacts with the questions and updates the timer
//TODO: function that when the last question is answered changed to the end screen
//TODO event on the scores button to display the scores

let startQuiz = () => {
	homeElement.classList.replace("flex", "hidden");

	questionsElement.classList.replace("hidden", "flex");

	seconds = setInterval(timerStart, 1000);

	timeElement.textContent = timeLeft;
};

function timerStart() {
	timeLeft--;
	timeElement.textContent = timeLeft;

	if (time <= 0) {
		endQuiz();
	}
}

startButton.onclick = startQuiz;
