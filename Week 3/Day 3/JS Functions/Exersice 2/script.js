let banner = document.getElementsByClassName("hero-image")[0];
banner.style.opacity = 0;

function pop_up(e) {
	let show_up = document.getElementsByClassName("hero-image")[0];
	show_up.style.opacity = 1;
}

setTimeout(pop_up, 1000);

function countdown() {
	let text = document.getElementsByTagName("h1")[0].innerHTML;
	let number = text.match(/\d+/)[0];
	if (number > 0) {
		document.getElementsByTagName("h1")[0].innerHTML = document.getElementsByTagName("h1")[0].innerHTML.replace(number, number-1);
	} else {
		let banner = document.getElementsByClassName("hero-image")[0];
		banner.style.opacity = 0;
		stop_time();
	}
}

let text = document.getElementsByTagName("h1")[0].innerHTML;
let go = setInterval(countdown, 1000);

function stop_time() {
	clearInterval(go);
}