let str = "This dinner is not vreverv erv bad! rgregsgrs";
let array = str.split("");
let not = str.indexOf("not");
let bad = str.indexOf("bad");
if (not < bad && not != -1 && bad != -1) {
	array.splice(not, bad-not+3, "good");
	str = array.join("");
}
console.log(str);