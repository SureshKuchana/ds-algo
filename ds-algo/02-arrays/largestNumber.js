// what is the largest number that consists of
// digits 3, 9, 5, 9, 7, 1? Use all the digits

// options : 359179, 537991, 913579,... 
// output  : 913579

// greedy algorithm

function largestNumber(arr){

}


//

function largestNumber1(arr){
	let hashArr = Array(arr.length).fill(0);
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		hashArr[arr[i]]++;
	}

	for (let j = arr.length; j >= 0; j--) {
		for (let i = 0; i < hashArr[i]; i++) {
			res.push(i);
		}
	}
}

console.log(" largestNumber " , largestNumber([3,5,9,1,7,9]));
console.log(" largestNumber " , largestNumber([5,3,7,9,9,1]));