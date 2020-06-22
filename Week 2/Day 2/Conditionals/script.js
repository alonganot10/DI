// let age = prompt("Enter age", "here");
// if (age < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// } else if (age == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
// 	alert("Powering On. Enjoy the ride!");
// }



// let a = 2 + 2;

// switch (a) {
//   case 3: // wont pass
//     alert( 'Too small' );
//     break;
//   case 4: // gets in
//     alert( 'Exactly!' );
//     break; // finishes the piece of code
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



let a = 2 + 2;

switch (a) {
  case 4: // goes in
    alert('Right!');
    break; // leaves the piece of code

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
