class LinkedListNode {
  constructor(value, next = null) {
    // this.value contains the actual value we want to store in our node
    this.value = value;
    // this.next is a pointer/reference to the next node our lists of nodes
    this.next = next;
  }

  // to see what is contained in each node of our linked list
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

module.exports = LinkedListNode;
