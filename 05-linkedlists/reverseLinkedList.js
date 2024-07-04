// Reverse linked list

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

class LinkedList {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

function reverseList(linkedList){
  var node = linkedList;
  var prev = null;

  // iterate over the node
  //[1, 2, 3]
  while(node){
    // save the next node
    var nextNode = node.next; // 2
    // assign next node to prev or reverse pointer
    node.next = prev; 
    // increment previous to current node
    prev = node;
    // increment node to next node or null at end of list
    node = nextNode;
  }

  return prev;
}

const sixthNode = new LinkedList(5);
const fifthNode = new LinkedList(4, sixthNode);
const fourthNode = new LinkedList(4, fifthNode);
const thirdNode = new LinkedList(3, fourthNode);
const secondNode = new LinkedList(1, thirdNode);
const firstNode = new LinkedList(1, secondNode);

console.log(reverseList(firstNode));