var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxCapacity = 0;
  let currentCapacity = maxCapacity;

  while (left < right) {
    currentCapacity = (right - left) * Math.min(height[left], height[right]);
    maxCapacity = Math.max(currentCapacity, maxCapacity);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxCapacity;
};
