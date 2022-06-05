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
