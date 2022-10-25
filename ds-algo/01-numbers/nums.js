function minMax() {}

// remove duplicate from the array

function removeDuplicateFromArray(arr) {
  let traceArr = {};
  let res;
  if (arr[0] === arr[1]) traceArr[arr[0]] = true;
  res = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!traceArr[arr[i]]) {
      res.push(arr[i]);
      traceArr[arr[i]] = true;
    }
  }
  const sortedRes = res.sort((a, b) => a - b);
  return res;
}

console.log(removeDuplicateFromArray([9, 4, 1, 2, 2, 2, 3, 3, 3]));

export function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return factorial(number - 1) * number;
}

const calculateFibonacci = function (n) {
  if (n < 2) return n;

  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

console.log(`5th Fibonacci is ---> ${calculateFibonacci(5)}`);
console.log(`6th Fibonacci is ---> ${calculateFibonacci(6)}`);
console.log(`7th Fibonacci is ---> ${calculateFibonacci(7)}`);
