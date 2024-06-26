/**
 * Given an array of positive numbers and a positive number ‘k’, 
 * find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3 
   Output: 9
   Explanation: Subarray with maximum sum is [5, 1, 3].

 * Example 2:
   Input: [2, 3, 4, 1, 5], k=2 
   Output: 7
   Explanation: Subarray with maximum sum is [3, 4].

 */

function max_sub_array_of_size_k(K, array){
  const res = [];
  let maxSum = 0.0, windowSum = 0.0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if(windowEnd >= K - 1){
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])) // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])) // 7
