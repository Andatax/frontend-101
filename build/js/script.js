const timeElement = document.getElementById("timer");
const scoresElement = document.getElementById("scores");
const homeElement = document.getElementById("homePage");
const questionsDivElement = document.getElementById("questions");
const questionTitleElement = document.getElementById("questionTitle");
const answersElement = document.getElementById("answers");
const endScreenElement = document.getElementById("endScreen");
const finalScoreElement = document.getElementById("finalScore");
const initialsElement = document.getElementById("initials");
const submitElement = document.getElementById("submit");
const startButtonElement = document.getElementById("startButton");

let seconds;
let questionsArrayIndex = 0;
const questions = [
	{
		question: "Commonly used data types DO NOT include:",
		options: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
	{
		question: "The condition in an if / else statement is enclosed within ____.",
		options: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		question: "Arrays in JavaScript can be used to store ____.",
		options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
		answer: "all of the above",
	},
];
let timeLeft = questions.length * 15;

//TODO event on the scores button to display the scores

let startQuiz = () => {
	homeElement.classList.replace("flex", "hidden");
	questionsDivElement.classList.replace("hidden", "flex");
	seconds = setInterval(timerStart, 1000);
	timeElement.textContent = timeLeft;
	questionsUpdate();
};

function timerStart() {
	timeLeft--;
	timeElement.textContent = timeLeft;
}

let questionsUpdate = () => {
	let questionIndex = questions[questionsArrayIndex];
	questionTitleElement.textContent = questionIndex.question;
	answersElement.innerHTML = "";
	questionIndex.options.forEach((el) => {
		const optionBtn = document.createElement("button");
		const btnText = document.createElement("h4");
		optionBtn.setAttribute("class", "btn-questions ");
		btnText.setAttribute("class", "pointer-events-none text-slate-200 font-bold ");
		btnText.textContent = el;
		optionBtn.appendChild(btnText);
		optionBtn.addEventListener("click", nextQuestion);
		answersElement.appendChild(optionBtn);
	});
};

function nextQuestion(event) {
	if (timeLeft < 0) {
		timeLeft = 0;
	}
	const btnElement = event.target.closest(".btn-questions");

	if (questions[questionsArrayIndex].answer === event.target.textContent) {
		btnElement.classList.replace("btn-questions", "btn-questions-correct");
	} else {
		btnElement.classList.replace("btn-questions", "btn-questions-incorrect");
		timeLeft -= 15;
	}
	questionsArrayIndex++;
	setTimeout(questionsUpdate, 300);

	if (timeLeft <= 0 || questionsArrayIndex === questions.length) {
		setTimeout(endScreen, 300);
	}
}

function endScreen() {
	questionsDivElement.classList.replace("flex", "hidden");
	clearInterval(seconds);
	endScreenElement.classList.replace("hidden", "flex");
	finalScoreElement.textContent = timeLeft;
}

let enterKey = (event) => {
	if (event.keyCode === 13) {
		submitScore();
	}
};

let saveScore = () => {
	let savedScores = [];
	const userScore = {
		user: initialsElement.value.trim(),
		score: timeLeft,
	};
	savedScores.push(userScore);
	localStorage.setItem("saveScores", JSON.stringify(savedScores));
};

let submitScore = () => {
	event.preventDefault();
	saveScore();
};
initialsElement.onkeyup = enterKey;
startButton.onclick = startQuiz;

submitElement.onclick = submitScore;
