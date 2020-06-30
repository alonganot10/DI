let bt = document.getElementById("jsstyle");
bt.addEventListener("mouseover", redBackground);
bt.addEventListener("click", blueBackground);
bt.addEventListener("mouseout", yellowBackground);

function redBackground() {
	this.style.background = "red";
}
function blueBackground() {
	this.style.background = "blue";
}
function yellowBackground() {
	this.style.background = "yellow";
}