// valid anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function isAnagram(src, target){
  if(src.length !== target.length) return false;

  let countS = {};
  let countT = {};  
  for (let index = 0; index < src.length; index++) {
    if(countS[src[index]]) countS[src[index]]++
    else countS[src[index]] = 1

    if(countT[target[index]]) countT[target[index]]++
    else countT[target[index]] = 1
  }

  for (const key in countS) {
    if(countS[key] !== countT[key]) return false;
  }

  return true;
  
}

console.log(isAnagram("anagram", "nagaram"));
 