function myMove() {
	let box = document.getElementById("animate");
	let width = document.getElementById("container").offsetWidth;
	let start = Date.now();

	let timer = setInterval(function() {
		let timePassed = Date.now() - start;
		box.style.left = timePassed + "px";
		if (parseInt(box.style.left) >= width-box.offsetWidth) {
			clearInterval(timer)
		}
	}, 1)
}