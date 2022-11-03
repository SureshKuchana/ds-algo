class DoubleLinkedListNode{
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}


class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const node = new DoubleLinkedListNode(value);
        if(!this.head){
            this.head = node
            this.tail = node
            return this;
        }

        let currentNode = this.tail;
        currentNode.next = node;
        currentNode.next.prev = currentNode;
        this.tail = node;
        return this;
    }
}

const ll = new DoubleLinkedList();
ll.append(1);
ll.append(2);
console.log(" ll ", ll.head.next)
console.log(" ll ", ll.head.value)
console.log(" ll ", ll.tail.prev)
console.log(" ll ", ll.tail.value)
