var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxCapacity = 0;
  let currentCapacity = maxCapacity;

  while (left < right) {
    currentCapacity = (right - left) * Math.min(height[left], height[right]);
    maxCapacity = Math.max(currentCapacity, maxCapacity);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxCapacity;
};


// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// var findMedianSortedArrays = function(nums1, nums2) {
//   let sum = 0;
//   for(let i = 0; i<nums1.length; i++){
//       sum += nums1[i];
//   }

//   for(let i = 0; i<nums2.length; i++){
//       sum += nums2[i];
//   }
//   return sum / (nums1.length + nums2.length)
// };

// Test Case failing for [1,3], [2,7] it should be 2.50000



// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21

var reverse = function(x) {
    
};


// Merge Sort

// mergeSort([1, 5, 7, 4, 2, 3, 6]) -- depth 0

// mergeSort([1, 5, 7, 4]) // mergeSort([2, 3, 6]) -- depth 1

// mergeSort([1, 5]) // mergeSort([7, 4]) -- depth 2

// mergeSort([1]) // mergeSort([5]) -- depth 3
// [1] is of length one. Base case. Return sorted list [1] -- depth 3

// mergeSort([5]) -- depth 3
// [5] is of length one. Base case. Return sorted list [5] -- depth 3

// merge([1], [5]) -- depth 3
// Is 1 or 5 smaller? 1. Add to end. [1]
// Left array is empty, concat right array. [1, 5]
// Return sorted array [1, 5].

// mergeSort([7, 4]) -- depth 2

// mergeSort([7]) // mergeSort([4]) -- depth 3
// [7] is of length one. Base case. Return sorted list [7] -- depth 3

// mergeSort([4]) -- depth 3
// [4] is of length one. Base case. Return sorted list [4] -- depth 3

// merge([7], [4]) -- depth 3
// Is 7 or 4 smaller? 4. Add to end. [4]
// Right array is empty, concat left array. [4, 7]
// Return sorted array [4, 7]

// merge([1, 5], [4, 7]) -- depth 2
// Is 1 or 4 smaller? 1. Add to end. [1]
// Is 5 or 4 smaller? 4. Add to end. [1, 4]
// Is 5 or 7 smaller? 5. Add to end. [1, 4, 5]
// Left array is empty, concat right array. [1, 4, 5, 7]
// Return sorted array [1, 4, 5, 7]

// mergeSort([2, 3, 6]) -- depth 1

// mergeSort([2, 3]) // mergeSort([6]) -- depth 2

// mergeSort([2]) // mergeSort([3]) -- depth 3
// [2] is of length one. Base case. Return sorted list [2]

// mergeSort([3]) -- depth 3
// [3] is of length one. Base case. Return sorted list [3]

// merge([2], [3]) -- depth 3
// Is 2 or 4 smaller? 2. Add to end. [2]
// Left array is empty, concat right array. [2, 3]
// Return sorted array [2, 4]

// mergeSort([6]) -- depth 2
// [6] is of length one. Base case. Return sorted list [6]

// merge([2, 3], [6]) -- depth 2
// Is 2 or 6 smaller? 2. Add to end. [2]
// Is 3 or 6 smaller? 3. Add to end. [2, 3]
// Left array is empty, concat right array. [2, 3, 6]
// Return sorted array [2, 3, 6]

// merge([1, 4, 5, 7], [2, 3, 6]) -- depth 1
// Is 1 or 2 smaller? 1. Add to end. [1]
// Is 4 or 2 smaller? 2. Add to end. [1, 2]
// Is 4 or 3 smaller? 3. Add to end. [1, 2, 3]
// Is 4 or 6 smaller? 4. Add to end. [1, 2, 3, 4]
// Is 5 or 6 smaller? 5. Add to end. [1, 2, 3, 4, 5]
// Is 7 or 6 smaller? 6. Add to end. [1, 2, 3, 4, 5, 6]
// Right array is empty, concat left array. [1, 2, 3, 4, 5, 6, 7]
// Return sorted list [1, 2, 3, 4, 5, 6, 7]


function mergeSort(array){
  if(array.length < 2) return array;
  
  // break the into smaller arrays
  let length = array.length;
  let middle = Math.floor(length /2);
  let left = array.slice(0, middle);
  let right = array.slice(middle)

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge left & right
  return merge(sortedLeft, sortedRight)
}

function merge(left, right){
  let sortedArray = []
  while(left.length && right.length){
    if(left[0] <= right[0]){
      sortedArray.push(left.shift())
    }else{
      sortedArray.push(right.shift())
    }
  }

  return sortedArray.concat(left, right)
}
console.log(mergeSort([1, 5, 7, 4, 2, 3, 6]))


// quick sort
function quickSort(arr){
  if(arr.length <= 1) return arr;

  // last element of an array
  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    if(element < pivot){
      left.push(element)
    }else{
      right.push(element)
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...quickSort(sortedLeft), pivot, ...quickSort(sortedRight)]
}


console.log(quickSort([1, 5, 7, 4, 2, 3, 6]))
