function getSecondLargest(nums) {
  if (nums.length > 0) {
    let max = nums[0];
    if (nums.length == 1) return max;
    let second = nums[1] < max ? nums[1] : max;
    for (let i of nums) {
      if (i > max) {
        second = max;
        max = i;
      }
      if (i > second && i < max) second = i;
    }

    return second;
  }
}

function getLargest(nums) {
  if (nums.length > 0) {
    let max = nums[0];
    if (nums.length === 1) return max;
    for (let i of nums) {
      if (i > max) {
        max = i;
      }
    }

    return max;
  }
}

console.log(getSecondLargest([1, 2, 3, 4]));
console.log(getLargest([1, 2, 3, 4]));
