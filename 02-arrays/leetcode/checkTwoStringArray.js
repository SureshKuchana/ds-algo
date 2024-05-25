//  https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

// without using the in-built methods

var arrayStringsAreEqual = function (word1, word2) {
  let leftWord = word1.length === 1 ? word1[0] : "";
  let rightWord = word2.length === 1 ? word2[0] : "";
  if(word1.length !== 1){
    for (let index = 0; index < word1.length; index++) {
      leftWord += word1[index];      
    }
  }
  if(word2.length !== 1){
    for (let index = 0; index < word2.length; index++) {
      rightWord += word2[index];      
    }
  }

  return leftWord === rightWord;
};

// or

const arrayStringsAreEqual = (word1, word2) => {

  const concatWord = (word) => {
    let concatedWord = '';
    for (let index = 0; index < word.length; index++) {
      concatedWord += word[index];      
    }
    return concatedWord
  }

  let leftWord = concatWord(word1)
  let rightWord = concatWord(word2)
  return leftWord === rightWord;
}
