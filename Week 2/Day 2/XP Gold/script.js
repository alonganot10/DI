let word = prompt("Enter a word");
word = word.replace(/[aeiouy]/gi, "[]");
console.log(word);


let lang = prompt("Enter which language you speak");
lang = lang.toLowerCase();
if (lang == "french") {
	alert("Bonjour");
} else if (lang == "english") {
	alert("Hello");
} else if (lang == "hebrew") {
	alert("Shalom");
} else {
	alert(":)");
}


let grade = prompt("Enter grade");
if (grade >= 90) {
	alert("A");
} else if (80 <= grade && grade < 90) {
	alert("B");
} else if (70 <= grade && grade < 80) {
	alert("C")
} else {
	alert("D")
}


let zip = prompt("Enter zip code");
if (zip.length != 5) {
	console.log("error");
} else if (isNaN(zip)) {
	console.log("error");
} else {
	console.log("good");
}