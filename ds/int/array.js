// Amazon shopping recently launched a new item whose daily customer ratings for n days is represented by the array ratings. They monitor these ratings to identify products that are not performing well. Find the number of groups that can be formed cosisting of 1 or more consecutive days such that the rating continuously decreases over the days.

// The rating is consecutively decreasing if it has the form: r, r-1, r-2... and so on, where r is the rating on first day of the group being considered. Two groups are considered different if they contain the ratings of different consecutive days.

// Example
// ratings = [4, 3, 5, 4, 3]

// There are 9 periods in which the rating consecutively decreases.

// 5 one day periods: [4], [3], [5], [4], [3]
// 3 two day periods: [4, 3], [5, 4], [4, 3]
// 1 three day period: [5, 4, 3]
// result ---> 9

// Example
// ratings = [2,1,3]
// [2] [1] [3] [2,1]
// result ---> 4

// Example
// ratings = [4,2,3,1]
// [4] [2] [3] [1]
// result ---> 4

function countDecreasingRating(rating) {
  let count = 0;
  let start = 0;
  let end = 0;
  let res = rating.length;
  while (end < rating.length) {
    if (rating[start] - rating[end] === 1 && start - end !== 0) {
      count++;
    } else {
      count = 0;
    }
    start = end;
    end++;
    res = res + count;
  }
  return res;
}
countDecreasingRating([4, 3, 5, 4, 3]); //

//  Find the power of each possible contiguous group of servers.
// ex- [2,1,3] - 27
// explanation -
// power[0,0] = min(2)*sum([2]) = 4
// power[0,1] = min(2,1)*sum([2,1]) = 3
// power[0,2] = min(2,1,3)*sum([2,1,3]) =6
// power[1,1] = min(1)*sum(1) = 1
// power[1,2] = min(1,3)*sum([1,3]) = 4
// power[2,2] = min(3)*sum([3]) = 9

// overall sum = 27

function findTotalPower(power) {
  let sum = 0;
  for (let i = 0; i < power.length; i++) {
    let min = power[i];
    sum += power[i] + power[i];
    let total_sum = power[i];
    for (let j = 0; j < array.length; j++) {
      const element = array[j];
    }
  }
}

findTotalPower([2, 1, 3]);
