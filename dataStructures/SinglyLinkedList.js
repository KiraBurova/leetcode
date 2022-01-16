// Node - stores a piece of data and has a reference to the next node

class Node {
    constructor(value) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        // create a node
        const node = new Node(value)
        // if the list is empty
        if (!this.length) {
            // set head and tail as new node
            this.head = node;
            this.tail = node;
        } else {
            // else set node to be the next of current tail 
            this.tail.next = node;    
            // set tail to be the new node
            this.tail = node;
        }
        this.length++

        return this;
    }
    pop() {
        if (!this.length) return undefined;

        let current = this.head;
        let newTail = current;

        // while there is next element
        while(current.next) {
            // new tail is second to lat
            newTail = current;
            // current is last
            current = current.next;
        }

        this.tail = newTail;
        // remove the link to the next element
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift() {
        if (!this.length) return undefined;

        const oldHead = this.head;
        this.head = oldHead.next;
        
        this.length--;

        if (!this.length) {
            this.tail = null;
        }

        return oldHead;
    }
    unshift(value) {
        const node = new Node(value)
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            const oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        }
        this.length++
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let node = this.head;

        while (counter !== index) {
            node = node.next;
            counter++
        }

        return node;
    }
    set(index, value) {
        if (!value) return null;

        const node = this.get(index)
        
        if (node) {
            node.value = value
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        
          if (index === this.length) return !!this.push(value);

        if (index === 0) return !!this.unshift(value)

        const newNode = new Node(value)
        const prevNode = this.get(index - 1)
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prevNode = this.get(index - 1);
        const node = this.get(index);
        prevNode.next = node.next;

        this.length--;

        return node;
    }
    reverse() {
        // 1 -> 2 -> 3
        let previous = null; 
        let current = this.head; // 1 
        let following = this.head; // 1

        while (current !== null) {
            following = following.next; // 1 -> 2 -> 3  null <- 1 -> 2 -> 3
            current.next = previous; // null <- 1 -> 2 -> 3 null <- 1 <- 2 -> 3
            previous = current; // for moving along
            current = following // for moving along
        }

        // null <- 1 <- 2  

        return previous;
        // return this;
    }

}

const list = new SinglyLinkedList()

list.push(1);
list.push(22)