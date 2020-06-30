let part1 = 'test test test test ';
let part2 = ' test test test test test ';
let part3 = ' yours truely ';

let btn = document.getElementById("lib-button");
btn.addEventListener("click", create_story);

function create_story(e) {
	console.log("test");
	let noun = document.getElementById("noun");
	let adjective = document.getElementById("adjective");
	let person = document.getElementById("person");
	let story = document.getElementById("story");
	story.innerHTML = part1+noun.value+part2+adjective.value+part3+person.value;
}