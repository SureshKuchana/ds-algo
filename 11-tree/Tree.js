// Tree

class Tree {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  // insertChild
  insertChild(value){
    const tree = new Tree(value)
    this.children.push(tree)
    return tree
  }

  // removeChild
}

const t1 = new Tree(0);
t1.insertChild(1);
t1.insertChild(2);
const t2 = new Tree(2)
t1.insertChild(t2);
console.log(t1);
console.log(t2);
