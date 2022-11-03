// A stack is a linear data structure that keeps its data in a stack or pile manner. A data structure is
// said to be linear if its elements form a sequence. Let’s think about a deck of playing cards that is face
// down. Each card is a unit of data that the deck (or “Stack”) is holding. They are face down because
// you don’t normally access the cards in the middle of the deck but you work with the top of the stack
// instead. The basic operations you may perform with such deck of playing cards are the following:
// • You may push a new card on top of the deck,
// • you may pop a card from the top of the deck,
// • you may peek a card from the top of the deck but leave it on the deck.
// These are the three most essential operations you normally use with a stack.
// A stack uses LIFO (last-in-first-out) ordering which means that the latest item you pushed to the
// stack is processed first. All the old items that are pushed to the stack will need to wait until all the
// new ones are processed.

class Stack{
    constructor() {
        this.items = [];
    }

    push(item){
        return this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        if(this.items.length === 0 )return null;
        return this.items[0];
    }
}

class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

class LinkedListStack{
    constructor() {
        this.list = null;
    }

    push(val){
        const node = new LinkNode(val);
        node.next = this.list;
        this.list = node;
    }

    pop(){
        if(!this.list) throw new Error("Empty Stack");

        const val = this.list.val;
        this.list = this.list.next;
        return val;
    }
}

// using function
let stack = [];
const push = (item) => stack.push(item);
const pop = () => stack.pop();
const peek = () => stack.length === 0 ? null : stack[0];




