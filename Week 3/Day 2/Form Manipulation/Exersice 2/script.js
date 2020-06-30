let select = document.getElementById("select1");
select.options[1].selected = true;

let option = document.createElement("option");
option.value = 'Work';
option.innerHTML = "Work";
select.appendChild(option);

let option2 = document.createElement("option");
option2.value = 'Primary School';
option2.innerHTML = 'Primary School';
option2.selectedIndex = 0;
select.insertBefore(option2, select.children[0]);

select.options[3].selected = true;

let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "click";
btn.addEventListener("click", alert_choise);
document.body.appendChild(btn);

function alert_choise(e) {
	let s = document.getElementById("select1");
	alert(s[s.selectedIndex].innerHTML);
}