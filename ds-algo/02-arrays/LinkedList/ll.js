/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedListNode{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value){
        // create a node
        const node = new LinkedListNode(value, this.head);
        // assign new node to the head, bz we are appending new head
        this.head = node;

        // if there is a no tail, let's make new node a tail
        if(!this.tail) this.tail = node
        return this;
    }

    append(value){
        // create a node
        const node = new LinkedListNode(value);
        // if there is no head, make node as head & tail
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        const currentTail = this.tail;
        currentTail.next = node;
        this.tail = node;

        return this
    }

    delete(value){
        if(!this.head) return null;

        let deletedNode = null;
        // if head to be deleted, make head.next to be new head
        while(this.head && this.head.value === value){
            deletedNode = this.head;
            this.head = this.head.next 
        }

        // if we want to delete the node in the middle of the LL, iterate through the LL
        // make sure we were in the beginning of the LL
        let currentNode = this.head;
        // make sure currentNode is not eq to null
        if(currentNode !== null){
            // check currentNode has the next value
            while(currentNode.next){
                // [1] ==> [2] ==> [3]
                // we want to delete node 2 i.e 2 index
                // 1.next to 3
                if(currentNode.next.value === value){
                    // assign currentNode to deletedNode
                    deletedNode = currentNode.next;
                    // make currentNode.next to 3rd node
                    currentNode.next = currentNode.next.next;
                }else{
                    // assign currentNode to next node
                    currentNode = currentNode.next
                }
            }
        }

        // check if tail must be deleted
        if(this.tail.value === value){
            this.tail = currentNode
        }

        return deletedNode
    }

    deleteTail(){
        const deletedTail = this.tail;

        // if we have single node
        // if we have multiple nodes

        // 1 . single node
        // check if the head value === tail value
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        // 2. multiple node
        // traverse the entire list to get to the next to last Node
        let currentNode = this.head;

        if(currentNode !== null){
            while(currentNode.next){
                if(!currentNode.next.next){
                    currentNode.next = null;
                }else{
                    currentNode = currentNode.next
                }
            }
        }

        this.tail = currentNode;

        return deletedTail
    }

    deleteHead(){
        // There are no items in our list
        if(!this.head) return null;

        const deletedHead = this.head;
        // There are many items in our list
        if(this.head.next){
            this.head = this.head.next;
        }else{
            // There is only 1 item in our list
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    find(value){
        if(!this.head) return null;

        let currentNode = this.head

        while(currentNode){
            // If value is specified then try to compare by value..
            if(value !== undefined && currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}