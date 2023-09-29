const orderedlistElement = document.getElementById("highScoresList");
const score = JSON.parse(localStorage.getItem("saveScores"));
const clearStorageElement = document.getElementById("clearStorage");
// ------------------------------------------------------function that displays the scores inside the DOM--------------------------------------------------------------
let displayScore = () => {
	console.log(score);

	if (score !== null) {
		orderedlistElement.classList.replace("hidden", "flex-col");

		score.forEach((element) => {
			const userScoreList = document.createElement("li");
			userScoreList.setAttribute(
				"class",
				"text-slate-200 text-center text-8xl font-bold uppercase"
			);
			userScoreList.textContent = element.user + " : " + element.score;
			orderedlistElement.appendChild(userScoreList);
		});
	}
};
// ---------------------------------------function that clears the scores from local storage--------------------------------------------------------------
const clearScoresLocalStorage = () => {
	window.localStorage.removeItem("saveScores");
	window.location.reload();
};
clearStorageElement.addEventListener("click", () => {
	clearScoresLocalStorage();
});

displayScore();
