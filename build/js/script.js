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

//TODO: function that starts the timer and update it on the page
//TODO: function that gets the questions
//TODO: function that interacts with the questions and updates the timer
//TODO: function that when the last question is answered changed to the end screen
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
//  ---------------------------------------------------create the button with h4 inside as string so html interpret it as HTML elements? using backquotes
// use foreach to create a button where it will assing the classes and the content of the button will be h4 as string

let questionsUpdate = () => {
	let questionIndex = questions[questionsArrayIndex];
	questionTitleElement.textContent = questionIndex.question;
	answersElement.innerHTML = "";
	questionIndex.options.forEach((el) => {
		const optionBtn = document.createElement("button");
		const btnText = document.createElement("h4");
		optionBtn.setAttribute(
			"class",
			"btn-questions flex w-auto h-auto m-5 shadow-md shadow-slate-300"
		);
		btnText.setAttribute("class", "pointer-events-none text-slate-800 font-bold ");
		btnText.textContent = el;
		optionBtn.appendChild(btnText);
		optionBtn.addEventListener("click", nextQuestion);

		answersElement.appendChild(optionBtn);
	});
};

function nextQuestion(event) {
	if (questions[questionsArrayIndex].answer === event.target.textContent) {
		// event.target.classList.replace("btn-questions", "btn-questions-correct");
		// event.target.setAttribute("style", "background-color:green !important");
		// alert("correct");
	} else {
		event.target.classList.add("bg-red-500");
	}
	console.log(event.target.getAttribute("class"));
	// questionsArrayIndex++;
	setTimeout(questionsUpdate, 3000);
}

startButton.onclick = startQuiz;
