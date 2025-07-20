// quickUnion

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function union(a, b) {
  let id1 = arr[a];
  let id2 = arr[b];
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] === id2) arr[index] = a;  
  }
}

function connected(a, b) {
  return arr[a] === arr[b]
}