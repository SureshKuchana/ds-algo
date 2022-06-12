// Iteration 1: [6,4,2,5,7] → [4,6,2,5,7] → [4,2,6,5,7] → [4,2,5,6,7] → [4,2,5,6,7]

// Iteration 2:[4,2,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

// Iteration 3: [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

// recommended approach
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

// This might not be the most efficient solution as it means the
//function will run on an already sorted array more than once.

function bubbleSort2(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

// console.log(bubbleSort([9, 10, 12, 4, 5, 7]));
console.log(bubbleSort2([9, 10, 12, 4, 5, 7]));
