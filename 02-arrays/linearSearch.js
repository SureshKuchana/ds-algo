// Linear Search

function linearSearch(arr, target){
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === target) return true;
	}
	return false;
}

console.log(" return true ", linearSearch([3,5,9,21,45,78,90,111,123], 45))
console.log(" return true ", linearSearch([0,2,3,5,6,9], 9))
console.log(" return false ", linearSearch([11,12,15,16,19], 10))
console.log(" return false ", linearSearch([1,2,4,6,9], 0)) 