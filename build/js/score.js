let displayScore = () => {
	const score = JSON.parse(localStorage.getItem("userScore"));
	console.log(score);
	if (score !== null) {
		score.Object.keys;
		document.getElementById("saved-name").innerHTML = score.user;
		document.getElementById("saved-grade").innerHTML = score.score;
	}
};
