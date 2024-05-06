function MinSizeSubArraySum(array, S) {
  let res = [];
  let windowSum = 0,
    windowStart = 0;
  minLength;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    while (windowSum >= S) {
      minLength = windowSum -= array[windowStart];
      windowStart++;
    }
  }
  return res.length;
}
console.log(MinSizeSubArraySum([2, 1, 5, 2, 3, 2], 7));
