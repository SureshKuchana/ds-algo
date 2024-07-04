// remove duplicates from linked list

// Given the head of a sorted linked list, delete all duplicates such that each element
// appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// eg: 1, 1, 3, 4, 4, 4, 5, 6, 6 ==> 1, 3, 4, 5, 6

class LinkedList {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

function removeDuplicateFromLL(linkedList){
  let currentNode = linkedList;
  while(currentNode !== null){
    let nextDistinctNode = currentNode.next;
    while(nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }

  return linkedList;
}

const sixthNode = new LinkedList(5);
const fifthNode = new LinkedList(4, sixthNode);
const fourthNode = new LinkedList(4, fifthNode);
const thirdNode = new LinkedList(3, fourthNode);
const secondNode = new LinkedList(1, thirdNode);
const firstNode = new LinkedList(1, secondNode);

console.log(firstNode, " firstNode");

console.log(removeDuplicateFromLL(firstNode));