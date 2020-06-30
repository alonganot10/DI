let p = document.getElementsByTagName("p");
for (let i of p) {
	i.className = "para_article";
}



let article_p = document.getElementsByTagName("article")[0].getElementsByTagName("p");
let last_p = article_p[article_p.length-1];
last_p.remove();



let h2_remove = document.getElementsByTagName("h2")[0];
h2_remove.addEventListener("click", bye_h2);

function bye_h2(e) {
	this.remove();
}



let h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = `${Math.floor(Math.random()*101)}px`;



let first_p = article_p[0];
first_p.addEventListener("click", hidden_p);

function hidden_p(e) {
	this.style.visibility = "hidden";
}



let second_p = article_p[1];
second_p.addEventListener("click", fade_p);

function fade_p(e) {
	this.style.opacity = "0";
	this.style.transition = "2s";
}



let table = document.createElement("table");
let html = document.getElementsByTagName("html");
html[0].appendChild(table);

html[0].addEventListener("input", update);

function update(e) {
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.value = document.getElementsByTagName("input")[0].value;
	tr.appendChild(td);
	let td1 = document.createElement("td");
	td1.value = document.getElementsByTagName("input")[1].value;
	tr.appendChild(td1);
	table.appendChild(tr);
}