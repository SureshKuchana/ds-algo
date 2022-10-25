function removeVowels(str) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
}

const str = "hello world";

const noVowels = str.replace(/[aeiouAEIOU]/gi, "");

console.log(noVowels); // 👉️ hll wrld

// without in built methods
function withoutInbuiltMethods(str) {}
console.log(removeVowels("abc"));

function word_flipper(str) {
  let res = "";
  let trimStr = str.split(" ");
  for (const word of trimStr) {
    let sss = reverseOfString1(word);
    res += sss;
  }
  console.log(" res", res);
}
word_flipper("hello suresh");
