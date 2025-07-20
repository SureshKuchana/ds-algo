// Given an array of strings strs, group the anagrams together.
//  You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs) {
  let res = {}
  for (const str of strs) {
    let count = new Array(26).fill(0);
    for (const char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");    
    res[key] ? res[key].push(str) : res[key] = [str];

  }

  return Object.values(res);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));