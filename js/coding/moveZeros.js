// move zeros to end
// [8, 5, 0, 10, 0, 20] => [8, 5, 10, 20, 0, 0]

// brute force
const moveZeros1 = (arr) => {
   for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0){
      arr.splice(i, 1);
      arr.push(0);
    }
   }
   return arr;
}

// brute force
const moveZeros2 = (arr) => {
  let temp = [];
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) c++;
    else temp.push(arr[i]);
  }

  for (let i = 0; i < c; i++) {
    temp.push(0);
  }

  return temp;
}

// optimized version
const moveZeros = (arr) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== 0){
      [arr[i], arr[c]] = [arr[c], arr[i]]
      c++;
    }
  }
  return arr;
}

console.log("moveZeros1 ", moveZeros1([8, 5, 0, 10, 0, 20]))
console.log("moveZeros2 ", moveZeros2([8, 5, 0, 10, 0, 20]))
console.log("moveZeros ", moveZeros([8, 5, 0, 10, 0, 20]))