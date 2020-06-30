let form = document.forms[0];
form.addEventListener("submit", volume_calc);

function volume_calc(e) {
	let radius = this.getElementsByTagName("input")[0].value;
	document.getElementById('volume').value = (Math.pow(radius, 3))*Math.PI*4/3;
	e.preventDefault();
}