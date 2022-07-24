class UF {
  constructor(value) {
    this.arrayData = [];
  }

  quickUnionFind(arrayElements) {
    for (let index = 0; index < arrayElements; index++) {
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

const jj = new UF();
jj.quickUnionFind(10);
console.log(" unionFind ", jj);
console.log(" isConnected ", jj.isConnected(3, 4));
