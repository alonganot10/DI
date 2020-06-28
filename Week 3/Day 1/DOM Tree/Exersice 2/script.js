console.log(document.getElementById("container"));
console.log(document.getElementsByTagName("div")[0]);
console.log();


let ul1 = document.body.children[1].querySelectorAll("li");
let ul2 = document.body.children[2].getElementsByTagName("li");
for (let i of ul1) {
	console.log(i);
}
console.log();
for (let i of ul2) {
	console.log(i);
}
console.log();


let firstli = document.querySelectorAll('ul > li:first-child');
for (let i of firstli) {
	console.log(i);
}
console.log();

let ul = document.getElementsByClassName("list");
for (let i of ul) {
	console.log(i.firstElementChild);
}