// binary search

function binarySearch(arr, target){s
	let low = 0;
	let high = arr.length;

	do{s
		const mid = Math.floor(low + (high - low) / 2);
		const val = arr[mid];
		if(val === target){
			return true;
		}else if(val > target){
			high = mid;
		}else{
			low = mid + 1
		}
	} while (low < high);
	return false;
}

console.log(" return true ", binarySearch([3,5,9,21,45,78,90,111,123], 45))
console.log(" return true ", binarySearch([3,5,9,21,45,78,90,111,123], 78))
console.log(" return true ", binarySearch([0,2,3,5,6,9], 9))
console.log(" return false ", binarySearch([11,12,15,16,19], 10))
console.log(" return false ", binarySearch([1,2,4,6,9], 0))