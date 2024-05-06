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
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  let charCountObject = {};

  for (const char of str1) {
    charCountObject[char] = (charCountObject[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCountObject[char]) return false;
    else --charCountObject[char];
  }

  return true;
}

console.log(anagram("abc", "cba"));
console.log(anagram("listen", "slient"));

function anagram1(str1, str2) {
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

console.log(anagram1("abc", "cba"));
console.log(anagram1("listen", "slient"));

// using built-in methods

function anagramWithbuiltInFunc(str1, str2) {
  let newstr1 = str1.toLowerCase().split("").sort().join();
  let newstr2 = str2.toLowerCase().split("").sort().join();

  if (newstr1 == newstr2) {
    console.log("String is Anagrams");
  } else {
    console.log("String is Not Anagrams");
  }
}

anagramWithbuiltInFunc("Hello", "lolHe");
anagramWithbuiltInFunc("Indian", "nIndisn");

// findValueAfterOperations

const finalValueAfterOperations = (operations) =>
  operations.reduce((a, c) => (c.includes("+") ? ++a : --a), 0);

var finalValueAfterOperations1 = function (operations) {
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    eval(operations[i]);
  }
  return X;
};

var romanToInt = function (s) {
  let dec = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(dec[s[i] + s[i + 1]], s[i] + s[i + 1], "dsdsd");
    if (dec[s[i] + s[i + 1]]) {
      res += dec[s[i] + s[i + 1]];
      i++;
    } else {
      res += dec[s[i]];
    }
  }
  console.log(res);
  return res;
};
console.log(romanToInt("XIIX"));

// word flipper
function word_flipper(str) {
  let res = "";
  let trimStr = str.split(" ");
  for (const word of trimStr) {
    let sss = reverseOfString1(word);
    res += sss + " ";
  }
  return res;
}
console.log(word_flipper("hello suresh"));

// hamming distance
// Eg : I have two strings
// A B C D & A C C D
// A B C D
// A C C D
// 0 1 0 1
//

// TODO : hamming distance

// first unique character in a given string

// without in-built functions/methods
function uniqueCharInString(s) {
  const hashTable = {};
  for (const char of s) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTable[char] === 1) return i;
  }
  return -1;
}

// with in-built function
function uniqueCharInString1(s) {
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return index;
    }
  }
  return -1;
}

console.log("uniqueCharInString ", uniqueCharInString("aabcc"));
console.log("uniqueCharInString1 ", uniqueCharInString1("aabcc"));

// group anagram

function groupAnagram(strs) {
  const ht = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (ht[sortedStr]) ht[sortedStr].push(str);
    else ht[sortedStr] = [str];
  }
  return Object.values(ht);
}

console.log("group Anagram ", groupAnagram(["abc", "bca", "cba", "dsds"]));

// is Valid palindrome
// palindrome is a orginal string === reverse of a string
// eg : level, radar

function isValidPalindrome(str) {
  str = str.replace(/[^\w]/gi, "").toLowerCase();
  let left = 0;
  let stringLength = str.length - 1;
  while (left < stringLength) {
    if (str[left] !== str[stringLength]) return false;
    left++;
    stringLength--;
  }
  return true;
}

function isValidPalindroneNumber(num) {
  let numToStr = num + "";
  let startIndex = 0;
  let endIndex = numToStr.length - 1;
  while (startIndex < endIndex) {
    if (numToStr[startIndex] !== numToStr[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
}

console.log(" isValidPalindrome ", isValidPalindrome("level"));

function validParenthesis(str) {
  const par = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      res.push(str[i]);
    } else {
      if (par[res.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return res.length === 0 ? true : false;
}

console.log("validParenthesis ", validParenthesis("{{}}"));
console.log("validParenthesis ", validParenthesis("{[)(]}"));
console.log("validParenthesis ", validParenthesis("()"));
console.log("validParenthesis ", validParenthesis("([][]}"));
console.log("validParenthesis --", validParenthesis("[[]()"));
console.log("validParenthesis ", validParenthesis("[{}]"));

// hamming_distance
// the Hamming distance between two strings of equal length
// is the number of positions at which the corresponding symbols are different.

// hamming_distance('ACTTGACCGGG','GATCCGGTACA')  res 10
// hamming_distance('shove','stove')  res 1
// 9 == hamming_distance('A gentleman','Elegant men')

function hamming_distance(str1, str2) {
  if (str1.length === str2.length) {
    let count = 0;
    for (let index = 0; index < str2.length; index++) {
      if (str1[index] !== str2[index]) count++;
    }
    return count;
  }
  return 0;
}
console.log(hamming_distance("shove", "stove"));
