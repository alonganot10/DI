//
//	This is the normal Daily Challenge bellow it is using self calling function
//
// const arr = [5,0,9,1,7,4,2,6,3,8];
// let arr2 = [];
// while (arr.length > 0) {
// 	let big = arr[0];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > big) {
// 			big = arr[i];
// 		}
// 	}
// 	big = arr.indexOf(big);
// 	arr2.push(arr.splice(big, 1));
// }


function Sort(array, i) {
	if (array.length-1 == i) {
		if (array[i] > array[i-1]) {
			let num = array[i];
			array[i] = array[i-1];
			array[i-1] = num;
			return array;
		}
		return array;
	}
	
}

const arr = [2,1,3];
console.log(Sort(arr, 0));


