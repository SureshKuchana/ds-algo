// Tree

class Tree {
  constructor(value) {
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

console.log(" ================================== ")
// Tree Traversal: In-Order, Pre-Order, Post-Order

// There are two methods to traverse trees: depth-first search (DFS) and breadth-first search (BFS).
// DFS is the most common way, and it is performed by traversing to the leaf nodes. It goes as deep as it can and then moves on to the next branch. DFS is implemented using a stack or recursion.
// BFS on the other hand traverse the tree by level and can also be called level-order traversal. So it will go all the way through level 1, then level 2, and follow this path until it reaches the last level. BFS is used to find the shortest path to a node.


/**
 * DFS is much more common with trees, so we will discuss how it's done here, and then discuss DFS vs. BFS in more depth in the graph data structure section.
   There are three ways to traverse a tree using DFS: in-order traversal, pre-order traversal, and post-order traversal. Each of these implementations are DFS and explore down a path fully. The only difference is the order in which they use the current node's data.
   In this article, we'll use the recursive solution to teach the concept because it is the best for gaining the initial intuition, and then in the interview questions, you'll get exposure to the iterative solutions as well.
 */

// Traversal Implementations
// For all the cases, we will only consider a binary tree that has a left and right pointer.

// You will notice that the code for each solution below looks very similar - almost identical. The only difference is when we "visit" a node which is when we use the current node's data in our algorithm.

// Since we are using recursion, we are building up a stack of function calls, and it will unwind when we reach the leaf nodes which is the base case. What determines the order is if we "visit" the node before the recursive call, after visiting the left node recursively, or after visiting both the left and right nodes recursively.


// The input function will be the following node implementation:
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// In our case we will consider visiting the node as just printing its value:

function visitNode(node) {
  if(node.value !== null) console.log(node.value);
}


function PreOrderTraversal(node){  
  if(node !== null){
    visitNode(node);
    PreOrderTraversal(node.left);
    PreOrderTraversal(node.right);
  }
}

// In-Order Traversal

// In-order traversal is the most common and visits the nodes in ascending order.
// If it were a binary search tree, this will start with the smallest value at the left-most node and end at the largest value at the right-most node.
// Use in-order traversal if you need to utilize the nodes as if they are in a sorted linear order.

function inOrderTraversal(node){  
  if(node !== null){
    inOrderTraversal(node.left);
    visitNode(node);
    inOrderTraversal(node.right);
  }
}

function PostOrderTraversal(node){  
  if(node !== null){
    PostOrderTraversal(node.left);
    PostOrderTraversal(node.right);
    visitNode(node);
  }
}

let root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(null);
root.right = new BinaryTreeNode(2);
root.right.left = new BinaryTreeNode(3);


PreOrderTraversal(root);
inOrderTraversal(root);
PostOrderTraversal(root);


/**
 * Breadth-First Search
 * 
 * With breadth-First search (BFS) you use a queue ds instead of a stack, It travers across
 * each level before going deeper into the graph.
 */

function breadthFirstSearch(root){
  let currentNode = root;
  let queue = [currentNode];

  while(queue.length > 0){
    // removing the root from queue;
    currentNode = queue.pop();
    // visiting the node
    visitNode(currentNode);

    // adding the left node
    if(currentNode.left !== null){
      queue.unshift(currentNode.left);
    }

    // adding the right node
    if(currentNode.right !== null){
      queue.unshift(currentNode.right);
    }    
  }  
}

let root1 = new BinaryTreeNode(1);
root1.left = new BinaryTreeNode(2);
root1.right = new BinaryTreeNode(3);
root1.left.left = new BinaryTreeNode(4);
root1.left.right = new BinaryTreeNode(5);
root1.right.right = new BinaryTreeNode(6);

console.log(" ========== breadthFirstSearch ============ ")
console.log(breadthFirstSearch(root1))

