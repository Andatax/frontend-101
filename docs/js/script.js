// -------------------------------------------------------------------Get Elements from DOM----------------------------------------------
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
// -----------------------------------------------------set global variables that will interact with the timer and questionIndex----------------------------------------------
let seconds;
let questionsArrayIndex = 0;
// ----------------------------------------------Create an array filled with objects for each question---------------------------------------------------
const questions = [
	{
		question: "Which of the following libraries/frameworks are used CSS?",
		options: ["TailwindCSS", "Bootstrap", "Materialize", "All of the above"],
		answer: "All of the above",
	},
	{
		question: "Which framework is not used for JavaScript?",
		options: ["React", "Django", "VueJS", "AngularJS"],
		answer: "Django",
	},
	{
		question: "What is the correct way to add an event listener to a button in JavaScript?",
		options: [
			"button.addEventListener('click', myFunction());",
			"button.on('click', myFunction());",
			"button.onClick = myFunction;",
			"button.onclick = myFunction;",
		],
		answer: "button.onclick = myFunction;",
	},
];

// ---------------------------------------Expression to track time/score depending on the number of questions----------------------------------------------------------

let timeLeft = questions.length * 15;

// -------------------------------------------------------------------Function that starts the quiz--------------------------------------------------------------
let startQuiz = () => {
	homeElement.classList.replace("flex", "hidden");
	questionsDivElement.classList.replace("hidden", "flex");
	seconds = setInterval(timerStart, 1000);
	questionsUpdate();
};
// -------------------------------------------------------------------Function that updates the questions--------------------------------------------------------------
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
console.log(questionsUpdate);
// -------------------------Function that checks the answers and updates the questions--------------------------------------------------------------
function nextQuestion(event) {
	if (timeLeft <= 0) {
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
	finalScoreElement.textContent = timeLeft - 15;
	timeElement.textContent = timeLeft;
}

// -------------------------------------------------------------------Function that starts the timer--------------------------------------------------------------
function timerStart() {
	timeLeft--;
	timeElement.textContent = timeLeft;
}
// -------------------------------------------------------------------Function that ends the quiz--------------------------------------------------------------
function endScreen() {
	if (timeLeft < 0) {
		timeLeft = 0;
	}
	questionsDivElement.classList.replace("flex", "hidden");
	clearInterval(seconds);
	endScreenElement.classList.replace("hidden", "flex");
	finalScoreElement.textContent = timeLeft;
	timeElement.textContent = timeLeft;
}
// -------------------------------------------------------------------Function checks for Enterkey when to submit the score--------------------------------------------------------------
let enterKey = (event) => {
	if (event.keyCode === 13) {
		submitScore();
	}
};
// --------------------------------------------------------function that saves the score--------------------------------------------------------------
let saveScore = () => {
	let savedScores = JSON.parse(window.localStorage.getItem("saveScores")) || [];
	const userScore = {
		user: initialsElement.value.trim(),
		score: timeLeft,
	};
	savedScores.push(userScore);
	window.localStorage.setItem("saveScores", JSON.stringify(savedScores));

	window.location.href = "./html/scores.html";
};

// -------------------------------------------------------------------Function that submits the score--------------------------------------------------------------
let submitScore = () => {
	event.preventDefault();
	saveScore();
	console.log(questionsUpdate);
};
initialsElement.onkeyup = enterKey;
startButton.onclick = startQuiz;

submitElement.onclick = submitScore;
