function bubbleSort(nums) {
  let swaped = false;
  do {
    swaped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);
  return nums;
}

function bubbleSort1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swaped = true;
      }
    }
  }
  return nums;
}

// console.log(bubbleSort([9, 10, 12, 4, 5, 7]));
console.log(bubbleSort1([9, 10, 12, 4, 5, 7]));
