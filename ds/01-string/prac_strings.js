function reverseOfString1(str) {
  let res = "";
  for (let index = str.length - 1; index >= 0; index--) {
    res += str[index];
  }
  console.log(" reverse of String ", res);
}

function reverseOfString2(str) {
  let resStr = "";
  let strPosition = str.length - 1;
  while (strPosition >= 0) {
    resStr += str[strPosition];
    strPosition - 1;
  }
  console.log(" reverse of String ", resStr);
}

reverseOfString1("hello Suresh");
reverseOfString1("string");
reverseOfString2("Koochana");
