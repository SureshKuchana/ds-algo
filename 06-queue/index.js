// A queue is a collection of entities in which the entities are kept in First-In-First-Out (FIFO) order.
// In a FIFO data structure, the first element added to the queue is the first one removed. When an
// element is added to the queue, all the elements that were added before it must be removed before
// the new element is removed. A commonly seen implementation of this in the real world are lines in
// a supermarket where the first shoppers in line are served first, with everyone else behind the first
// shopper served after.

// When to use a Queue
// Queues are found in different messaging applications where messages are often generated faster
// than they are processed. For example, when you want to parse a lot of web-pages or send a lot of
// emails, you might want to put those web-pages or emails into a queue for further processing and
// process them one by one without worrying that some of the data being lost or messages dropped.
// Queues are also used as a component in many other algorithms. Queues are used in graph or tree
// breadth-first search, for example, when we need to store a list of the nodes that we need to process
// later. Each time we process a node, we add its adjacent nodes or children to the end of the queue.
// Using a queue allows us to process nodes in the order they are visited.

class Queue{
    constructor() {
        // track queue item
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue(){
        const headItem = this.items[this.headIndex]; 
        delete this.items[this.headIndex];
        this.headIndex++;
        return headItem;
    }

    peek(){
        return this.items[this.headIndex];
    }

    get length(){
        return this.tailIndex - this.headIndex;
    }
}
const queue = new Queue();

queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);
console.log(" queue ", queue);
console.log(" queue.dequeue ", queue.dequeue()); // => 7
console.log(" queue.peek ", queue.peek()); // => 2
console.log(" queue.length ", queue.length); // => 3
console.log(" queue ", queue);

// function time O(n) & O(n)
// for push & pop time complexity is O(1) but for shift & unshift time is O(n)
let queueArr = [];
const enqueue = (item) => queueArr.push(item);
const dequeue = () => queueArr.shift();

function Queue1(){
    this.queue = {};
    this.tail = 0;
    this.head = 0;
}

Queue1.prototype.enqueue = function(element){
    this.queue[this.tail++] = element
}


Queue1.prototype.dequeue = function(){
    if(this.tail === this.head){
        return undefined
    }

    const item = this.queue[this.head]
    delete item;
    return item
}


class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
    }
}

class QueueNode {
    constructor(){
        this.first = this.last = null;
    }

    // return 1st item from queue
    peek(){
        return this.first;
    }

    // add a new last item to the queue
    enqueue(item){
        const newNode = new Node(item);

        if(this.first === this.last) {
            this.first = this.last = newNode;
        } else {
            this.last = newNode;
            this.last.prev = newNode;
        }

        return newNode;
    }

    // remove the first item from the list
    dequeue(){
        const removeItem = this.first;

        if(!removeItem) return null;

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = removeItem.prev;

        return removeItem;

    }
}