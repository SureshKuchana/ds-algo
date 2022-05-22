const LinkedListNode = require("./LinkedListNode");

class LinkedList {
  //Each of these properties points to a LinkedListNode object.
  //They are the beginning and the end of our collection of LinkedListNodes .
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add a node to the beginning of the list
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    console.log(" prepend !this.tail ", !this.tail, this.tail);

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // add a node to the end of the list
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    console.log(" appedn !this.head ", !this.head, this.head);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    console.log(" appedn 2 !this.tail ", !this.tail, this.tail);

    // Set the next property of the current tail to the new node
    const currentTail = this.tail;
    currentTail.next = newNode;
    console.log(" this.tail ", this.tail.next);
    // Attach new node to the end of linked list.
    this.tail = newNode;
  }

  // delete - remove a node from the list
  delete(value) {
    //First, we check to see if our LinkedList is empty by checking if this.head is null. If it is, we return null .
    if (!this.head) {
      return null;
    }

    let deleteNode = null;
  }
}

LinkedList.fromValues = function (funcName, ...values) {
  const ll = new LinkedList();
  if (funcName === "prepend") {
    for (let i = 0; i < values.length; i++) {
      ll.prepend(values[i]);
    }
  }
  if (funcName === "append") {
    for (let i = 0; i < values.length; i++) {
      ll.append(values[i]);
    }
  }
  return ll;
};

module.exports = LinkedList;
