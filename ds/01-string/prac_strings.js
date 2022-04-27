////////////////////////////////////////////////////////////
///////////  Reverse of the string      ////////////////////
////////////////////////////////////////////////////////////

function reverseOfString1(str) {
  let res = "";
  for (let index = str.length - 1; index >= 0; index--) {
    res += str[index];
  }
  return res;
}

function reverseOfString2(str) {
  let resStr = "";
  let strPosition = str.length - 1;
  while (strPosition >= 0) {
    resStr += str[strPosition];
    strPosition -= 1;
  }
  return resStr;
}

console.log(reverseOfString1("hello Suresh"));
console.log(reverseOfString1("string"));
console.log(reverseOfString2("Koochana"));

////////////////////////////////////////////////////////////
///////////  Anagram is a word phrase   ////////////////////
////////////////////////////////////////////////////////////

function anagram(str1, str2) {
  let objectRes = {};

  // if length of two string's is same then return true string
  if (str1 === str2) return true;

  // if length of two string's is not same then return false string
  if (str1.length !== str2.length) return false;

  // looping through each character's of the str1,
  // checking charCodeAt of current character, substracting with (a ASCII) - 97,
  // then storing the ASCII res as a key to track the character for later validation,
  // for now assinging value to 1
  // finally adding the key-value pair into the object
  for (let i = 0; i < str1.length; i++) {
    let char = str1.charCodeAt[i] - 97;
    objectRes[char] = (objectRes[char] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    let char = str2.charCodeAt[j] - 97;
    if (!objectRes[char]) {
      return false;
    }
    objectRes[char]--;
  }
  return true;
}

console.log(anagram("abc", "cba"));
console.log(anagram("listen", "slient"));
