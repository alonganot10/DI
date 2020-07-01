let banner = document.getElementsByClassName("hero-image")[0];
banner.style.opacity = 0;

function pop_up(e) {
	let show_up = document.getElementsByClassName("hero-image")[0];
		show_up.style.opacity = 1;
}

setTimeout(pop_up, 5000);