class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
}

const tree1 = new Tree(1);
const tree2 = tree1.insertChild(5);
tree2.insertChild(2);
console.log(tree1);
console.log(tree2);
