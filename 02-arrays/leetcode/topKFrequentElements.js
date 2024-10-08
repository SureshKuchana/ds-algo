// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function(nums, k) {
  map = new Map();
  res = [];
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const buckets = Array(nums.length + 1).fill().map(() => [])

  for (const [num, freq] of map) {
    buckets[freq].push(num)
  }

  for(let i = buckets.length -1; i>=0 && res.length < k; i--){
    if(buckets[i].length > 0) res.push(...buckets[i])
  }
  
  return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 2], 2))