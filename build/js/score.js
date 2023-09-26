let displayScore = () => {
	const score = JSON.parse(localStorage.getItem("userScore"));
	if (score !== null) {
		console.log(score.Object.keys);
		document.getElementById("initials").innerHTML = score.user;
		document.getElementById("score").innerHTML = score.score;
	}
};
// console.log(displayScore);
