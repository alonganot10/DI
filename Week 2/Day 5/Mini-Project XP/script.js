function my_f(num) {
	if (document.getElementById("calc").innerHTML == 0) {
		document.getElementById("calc").innerHTML = num;
	} else if (document.getElementById("calc").innerHTML.length < 15) {
		document.getElementById("calc").innerHTML += num;
	}
}

function reset() {
	document.getElementById("calc").innerHTML = 0;
}

function clearCalc() {
	let num = document.getElementById("calc").innerHTML;
	let array = num.split("");
	if (array.length == 1) {
		document.getElementById("calc").innerHTML = 0;
	} else {
		array.pop();
		document.getElementById("calc").innerHTML = array.join("");
	}
}

function calculate() {
	document.getElementById("calc").innerHTML = (eval(document.getElementById("calc").innerHTML)).toFixed(14-(parseInt(eval(document.getElementById("calc").innerHTML))).toString().length);
}