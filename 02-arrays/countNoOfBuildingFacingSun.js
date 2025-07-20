/**
 * Given an input array height[] representing the heights of buildings, write a program
 * to count the number of buildings facing the sunset. It is assumned that the heights
 * of all buildings are distinct
 */

// Input = [7,4,8,2,9] Output = 3
// Explaination: As 7 is the 1st ele, it can see the sunset, Similarly, 8 and 9 can the sunset
// 4 and 2 can't see the sunset bz 7 & 8 are hiding it.

// Input = [2,3,4,5] Output = 4

// brute force solution
function facingSunsetBruteForce(arr){
  let count = 1;
  for (let i = 0; i < arr.length; i++) {    
      if(arr[i] - arr[i+1] < 0){
        count++;
      }
  }

  return count;
}

// Best solution
function facingSunset(heights) {
  let count = 1;
  let maxSoFar = -Infinity;
  for (const height of heights) {
    if(height > maxSoFar){
      count++;
      maxSoFar = height; 
    }
  }

  return count;
}


console.log(facingSunsetBruteForce([7,4,8,2,9]));
console.log(facingSunsetBruteForce([2,3,4,5]));
console.log(facingSunsetBruteForce([5, 4, 3, 2, 1]));


console.log(facingSunset([7,4,8,2,9]));
console.log(facingSunset([2,3,4,5]));
console.log(facingSunset([5, 4, 3, 2, 1]));

