let nav = document.getElementById('navBar');
nav.setAttribute('id', 'socialNetworkNavigation');

let new_li = document.createElement('li');
let new_text = document.createTextNode('Logout');
new_li.appendChild(new_text);
document.getElementsByTagName('ul')[0].appendChild(new_li);

let first = document.querySelectorAll('li')[0].firstChild.firstChild;
let last = document.getElementsByTagName('ul')[0].lastChild.firstChild;
console.log(first.nodeValue);
console.log(last.nodeValue);