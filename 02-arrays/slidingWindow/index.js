// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:
// For the first 5 numbers (subarray from index 0-4), the average is:  (1 + 3 + 2 + 6 -1)/5 => 2.2
// The average of next 5 numbers (subarray from index 1-5) is: (3 + 2 + 6 -1 + 4)/5 => 2.8
// For the next 5 numbers (subarray from index 2-6), the average is: (2 + 6 - 1 + 4 + 1)/5 => 2.4
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// A brute-force algorithm will be to calculate the sum of every 5-element contiguous subarray of the given array and
// divide the sum by ‘5’ to find the average. This is what the algorithm will look like:

function find_avg_of_subArr(K, arr){
  const res = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    sum = 0.0;
    for(let j = i; j < i + K; j++){
      sum += arr[j];
    }
    res.push(sum);    
  }
  return res;
}

console.log(find_avg_of_subArr(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))

// Time complexity would be: O(N * K)

/**
 * The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements. 
 * This means that when we move on to the next subarray, we will slide the window by one element. 
 * So, to reuse the sum from the previous subarray, we will subtract the element going out of the window and
 *  add the element now being included in the sliding window. This will save us from going through the whole subarray
 *  to find the sum and, as a result, the algorithm complexity will reduce to O(N).
 */

// Sliding window

function find_avg_of_subArr_sliding_window(K, array){
  const res = [];
  let windowSum = 0.0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if(windowEnd >= K - 1){
      res.push(windowSum / 5);
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }
  return res;
}

console.log(find_avg_of_subArr_sliding_window(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))