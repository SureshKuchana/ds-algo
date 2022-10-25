// Binary search is an efficient algorithm that searches a sorted list for a desired, or target, element
// [0,2,5,5,9,10,11,12,14,15]
// [0,2,5,5,9] [10,11,12,14,15]
// ele > target -- look into left array
// ele < target -- look into right array
function binarySearch(k, nums){
    let min = 0;
    let max = nums.length - 1;
    let index, ele;
    while(min <= max){
        index = Math.floor((min + max) / 2)
        ele = nums[index];
        if(ele < k) {
            min = index + 1;
        }else if(ele > k){
            max = index - 1;
        }else{
            return true
        }
    }
    return false
}

console.log("binarySearch", binarySearch(14, [0,2,5,5,9,10,11,12,14,15]));

// Squares of a Sorted Array

function sortedSquares(nums){
    let arr = Array(nums.length).fill(0);
    let min = 0; let max = nums.length - 1;
    let trackNewArrayIndex = arr.length - 1;
    while(min <= max){
        let minSq = nums[min] * nums[min];
        let maxSq = nums[max] * nums[max];
        if( Math.abs(minSq) > Math.abs(maxSq)){
            arr[trackNewArrayIndex] = minSq;
            min++;
        }else{
            arr[trackNewArrayIndex] = maxSq
            max--
        }
        trackNewArrayIndex--;
    }
    return arr
}


function sortedSquares2(nums){
  let arr = Array(nums.length).fill(0);
    let min = 0; let max = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let smallerValue = nums[min] * nums[min]
        let largerValue = nums[max] * nums[max]
        if(Math.abs(smallerValue) > Math.abs(largerValue)){
            arr[i] = smallerValue;
            min++
        }else{
            arr[i] = largerValue;
            max--
        }
    }
    return arr
}

console.log("sortedSquares -----", sortedSquares([-4,-1,0,3,10])) // [ 0, 1, 9, 16, 100 ]
console.log("sortedSquares 2 --------", sortedSquares2([-4,-1,0,3,10])) // [ 0, 1, 9, 16, 100 ]

const words = [
    'ptolemaic', // 0
    'retrograde', // 1
    'supplant', // 2
    'undulate', // 3
    'xenoepist', // 4
    'asymptote',  // <-- rotates here! 5
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];


function findRotationPoint(words){
    let firstWord = words[0];
    let min = 0, max = words.length - 1;
    while(min < max){
        const index = Math.floor(min + ((max - min) / 2))
        if(words[index] >= firstWord){
            min = index;
        }else{
            max = index;
        }
        if( min + 1 === max) break
    }
    return max;
}

// Linear Search
function findRotationPoint1(words){
    let min = words[0];
    for (let i = 1; i < words.length; i++) {
        if( min > words[i]) {
            console.log(min , words[i])
            min = words[i]
        };
    }
    return min;
}

console.log(" findRotationPoint ", findRotationPoint(words))
console.log(" findRotationPoint ", findRotationPoint(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']))
console.log(" findRotationPoint2 ", findRotationPoint1(words))
console.log(" findRotationPoint2 ", findRotationPoint1(['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']))
