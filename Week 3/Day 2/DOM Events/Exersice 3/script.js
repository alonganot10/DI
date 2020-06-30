let x = document.getElementById("jsstyle");
let div = document.getElementsByTagName('div');
div[0].addEventListener("click", click);
x.addEventListener("mouseover", color);
x.addEventListener("mouseleave", color2);
x.addEventListener("click", click2);

function click(e) {
	console.log('you just clicked '+this);
}
function color(e) {
	this.style.background = 'red';
}
function color2(e) {
	this.style.background = 'blue';
}
function click2(e) {
	console.log('you just clicked '+this);
	e.stopPropagation();
}