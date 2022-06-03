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
    console.log(" message ", message);

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
