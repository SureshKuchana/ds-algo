// Difficulty: Easy
// Validate Subsequence 
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that arent necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

// Input
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// Output
// true


function isValidSubsequence(array, sequence) {  
  console.time("validate-subsequence");  
  let seqIdx = 0;
  for(let value of array){
  	if(value === sequence[seqIdx]) seqIdx++;
  	if(seqIdx === sequence.length) {
      console.timeEnd("validate-subsequence");
      return true;
    };
  }
  console.timeEnd("validate-subsequence");
  return false;
}

console.log(" isValidSubsequence ", isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))