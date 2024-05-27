// Validate Sequence

// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers [1, 3, 4] form a subsequence of the array [1,2,3,4], and so do the
// numbers [2, 4]. Note that a single number in an array and the array itself are both valid 
// subsequences of the array

// sample input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

// sample output : true

function isValidSubsequence(array, sequence) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if(array[index] === sequence[count]) {
      count++;
    }
  }
  return count === sequence.length;
}

// or

function isValidSubsequenceFunc(array, sequence){
  let count = 0;
  for (const value of array) {
    if(count === sequence.length) break;
    if(sequence[count] === value) count++;
  }
  return count === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSubsequenceFunc([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
