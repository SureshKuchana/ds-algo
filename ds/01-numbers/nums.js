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
