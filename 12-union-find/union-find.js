// Quick Find

/**
 * Data Structure
 * 
 * 1. Integer Array [] of size N.
 * 2. Interpretation: p and q are connected if they have same id
 * 
 * Find: Check if p & q have the same id
 * Union: To merge components containing p & q, change all entries whose 
 * id equals id[p] to id[q]
 */

/**
 * id[] [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * 
 * connected(4, 3) => false
 * union(4, 3) 
 * connected(4, 3) => true
 * union(3, 9)
 * union(5, 6)
 * union(9, 4)
 * union(2, 1)
 * connected(8, 9) => true
 * connected(5, 0) => false
 */


class UF {
  constructor(value) {
    this.arrLength = value;
    this.arrayData = [];
  }

  quickUnionFind() {
    for (let index = 0; index < this.arrLength; index++) {
      this.arrayData[index] = index;
    }
  }

  isConnected(n1, n2) {
    return this.arrayData[n1] === this.arrayData[n2];
  }

  union(n1, n2) {
    let n1Id = this.arrayData[n1];
    let n2Id = this.arrayData[n2];

    for (let index = 0; index < this.arrayData.length; index++) {
      if (this.arrayData[index] === n1Id) this.arrayData[index] = n2Id;
    }
  }
}

const unionFind = new UF(10);
unionFind.quickUnionFind();

console.log(" isConnected ", unionFind.isConnected(0, 1)); // return false
console.log(" unionFind ", unionFind.union(0, 1));
console.log(" isConnected ", unionFind.isConnected(0, 1)); // return true


// ======================== functional approach

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function union(a, b) {
  let id1 = arr[a];
  let id2 = arr[b];
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] === id1) arr[index] = id2;  
  }
}

function connected(a, b) {
  return arr[a] === arr[b]
}

/**
 * Union-find too expensive
 * Takes N2 array
 * 
 * algorithm   initialize  union find
 * quick find     N         N      1
 */
