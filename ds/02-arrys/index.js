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
