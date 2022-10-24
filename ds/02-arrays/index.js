// validate subsequence of array

// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.
{
  /* <p>
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
  <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.
</p>; */
}

// sample input
//  array = [5, 1, 22, 25, 6, -1, 8, 10]
//  sequence = [1, 6, -1, 10]

// sample output
// true

function isValidSubsequence1(array, sequence) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < sequence.length; j++) {
      if (array[i] === sequence[j]) {
        if (res < i) {
          res = i;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

// sol1
function isValidSubsequence2(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

// sol2
function isValidSubsequence3(array, sequence) {
  let seqIdx = 0;
  let arrIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

// find the min value in the given array
function findMinValue(arr) {
  if (arr.length === 1) return arr[0];
  if (arr[0] <= 1) return arr[0];
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
}

console.log(" findMinValue ", findMinValue([78, 89, 90, 19]));

// find the 2nd min value in the given array
function find2ndMinValue(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) {
    return arr[0] < arr[1] ? arr[0] : arr[1];
  }

  let minValue = arr[0]; // 1
  let maxValue = arr[1]; // 2 arr[2] = 3
  for (let i = 2; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
}

console.log(" find2ndMinValue ", find2ndMinValue([78, 89]));
console.log(" find2ndMinValue ", find2ndMinValue([78, 89, 90, 19]));

// function that takes an array of characters and reverses the letters

function reverseOfCharsInArray(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return arr;
}

console.log(
  " reverse of chars an array",
  reverseOfCharsInArray(["a", "b", "c"])
);

function reverseWords(message) {
  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    // Found the end of the current word!
    if (i === message.length || message[i] === " ") {
      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {
  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {
    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

console.log(
  reverseWords([
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l",
  ])
);

// Given all three arrays, write a function to check that my service is first-come, first-served.
// All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,
//   Take Out Orders: [1, 3, 5]
//   Dine In Orders:  [2, 4, 6]
//   Served Orders:   [1, 2, 4, 6, 5, 3]

// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

// Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 3, 5, 4, 6]

// would be first-come, first-served.

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
    var order = servedOrders[i];

    // if we still have orders in takeOutOrders
    // and the current order in takeOutOrders is the same
    // as the current order in servedOrders
    if (
      takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
      order === takeOutOrders[takeOutOrdersIndex]
    ) {
      takeOutOrdersIndex++;

      // if we still have orders in dineInOrders
      // and the current order in dineInOrders is the same
      // as the current order in servedOrders
    } else if (
      dineInOrdersIndex <= dineInOrdersMaxIndex &&
      order === dineInOrders[dineInOrdersIndex]
    ) {
      dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current
      // order in takeOutOrders or dineInOrders, then we're not serving first-come,
      // first-served
    } else {
      return false;
    }
  }

  console.log(
    " dineInOrdersIndex ",
    dineInOrdersIndex,
    " takeOutOrdersIndex ",
    takeOutOrdersIndex
  );

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (
    dineInOrdersIndex != dineInOrders.length ||
    takeOutOrdersIndex != takeOutOrders.length
  ) {
    return false;
  }

  // all orders in servedOrders have been "accounted for"
  // so we're serving first-come, first-served!
  return true;
}

console.log(isFirstComeFirstServed([1, 3, 5], [2, 4, 6], [1, 2, 3, 5, 4, 6]));

// Sorting the arrays

// Bubble sort
// eg. [1,3,4,5,2] end result should be the [1,2,3,4,5]
// Iteration 1: [6,4,2,5,7] → [4,6,2,5,7] → [4,2,6,5,7] → [4,2,5,6,7] → [4,2,5,6,7]

// Iteration 2:[4,2,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

// Iteration 3: [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

function bubbleSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

// method 2 using the do while loop

function bubbleSort2(arr) {
  let isSwapped = false;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
}

// console.log(" bubbleSort ", bubbleSort([2, 3, 4, 1]));
console.log(" bubbleSort2 ---- ", bubbleSort2([2, 3, 4, 1, 9, 4]));

// insertion sort
function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let j;
    let numberToinsert = array[index];
    for (j = index - 1; j >= 0 && array[j] > numberToinsert; j--) {
      array[index + 1] = array[j];
    }
    array[index + 1] = numberToinsert;
  }
  return array;
}

console.log(" insertionSort ---- ", insertionSort([2, 3, 4, 1, 9, 4]));

// merge the two given array in sorted order

function mergeSortedArrays(arr1, arr2) {}

// find the average of all contiguous subarrays of size ‘5’ in the given array.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

function avgOfContiguousSubArrays(arr, k) {
  let count = 1;
  let res = [];
  let tempRes = [];
  let isCalAvg = false;
  do {
    for (let index = res.length; index < arr.length && count <= k; index++) {
      tempRes.push(arr[index]);
      if (count === k) {
        let temp =
          tempRes.reduce((prev, current) => prev + current) / tempRes.length;
        res.push(temp);
        count = 1;
        isCalAvg = true;
        tempRes = [];
      }
    }
  } while (isCalAvg);
  return res;
}

// from internet
// Time efficiency O(N * K)

function calAvgofContiguousSubArrays(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    res.push(sum / k);
  }
  return res;
}

// slide window algorithm
// Time efficiency O(N)
function calAvgofContiguousSubArrays1(arr, k) {
  let res = [];
  let windowStart = 0,
    windowSum = 0.0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      res.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return res;
}

// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

function MaxSizeSubArraySum(array, S) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if (windowEnd >= S - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum = windowSum - array[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}

console.log(" max size sub array sum", MaxSizeSubArraySum([2, 3, 4, 1, 5], 2));

// Smallest Subarray with a given sum (easy)
// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0, if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

function MinSizeSubArraySum(array, S) {
  let minLength = Infinity,
    windowSum = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (minLength === Infinity) return 0;
  else minLength;
}

// TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

// alternate solutions
// time = O(n); space = O(n)
// 5 + 1 = 6; (1 = 6 - 5)
function TwoSum(array, target) {
  let hash_map = {};
  for (let index = 0; index < array.length; index++) {
    if (array[index] in hash_map) {
      return [index, hash_map[array[index]]];
    } else {
      hash_map[target - array[index]] = index;
    }
  }
}

// Longest Substring with maximum K Distinct Characters (medium)
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
// Example 4:

// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

const longest_substring_with_k_distinct = function (str, k) {
  // TODO: Write your code here
  let windowStart = 0;
  let hashmap = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (Object.keys)
      if (str[windowEnd] in hashmap) {
        hashmap[str[windowEnd]]++;
      } else {
        hashmap[str[windowEnd]] = 1;
      }
  }
  return -1;
};

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Example 1:

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
// Example 2:

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

const pairWithTargetSum = (array, T) => {
  let windowStart = 0,
    windowSum = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd]
    
  }
};

function insertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
      let numberToinsert = arr[i];
      let j;
      for (j = i - 0; j >= 0 && arr[j] > numberToinsert; j--) {
          arr[j + 1] = arr[j]
      }
      arr[j + 1] = numberToinsert
  }
  return arr;
}

console.log(insertionSort([3, 2, 5, 4, 1]));
