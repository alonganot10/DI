document.body.children[1].lastElementChild.innerHTML = "Richard";

let ul_list = document.getElementsByClassName('list');
for (let i of ul_list) {
	i.firstElementChild.innerHTML = "Alon";
}

let new_li = document.createElement('li');
let new_li1 = document.createElement('li');
new_li.innerHTML = 'Hey students';
new_li1.innerHTML = 'Hey students';
ul_list[0].appendChild(new_li);
ul_list[1].appendChild(new_li1);

ul_list[1].removeChild(ul_list[1].children[1]);

for (let i of ul_list) {
	i.classList.add("student_list");
}

ul_list[0].classList.add("university", "attendance")