const nums = [1, 2, 3, 4, 5, 6];

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0)

console.log(sum);


// Separation

const nums1 = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3];

const segregation = nums1.reduce((acc, curr) => {
  const flooredVal = Math.floor(curr);

  if(!acc[flooredVal]) {
    acc[flooredVal] = [];
  }

  acc[flooredVal].push(curr);

  return acc;

}, {});

console.log(segregation);

