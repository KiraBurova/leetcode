class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const node = new Node(value)

        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }
    pop() {
        if (!this.length) return undefined;

        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }
    shift() {
        const shiftedHead = this.head;

        if (!this.length) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedHead.next;
            shiftedHead.next = null;
            this.head.prev = null;  
        }

        this.length--;
        return shiftedHead;
    }
    unshift(value) {
        const node = new Node(value);

        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index === this.length) return null;

        let counter;
        let node;
        
        if (index <= this.length / 2) {
            counter = 0;
            node = this.head;

            while (counter !== index) {
                node = node.next;
                counter++;
            }
        } else if (index > this.length / 2) {
            counter = this.length - 1;
            node = this.tail;

            while(counter !== 0) {
                node = node.prev;
                counter--;
            }
        }

        return node;
    }
    set(index, value) {
        const node = this.get(index);

        if (node) {
            node.value = value;

            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const node = new Node(value);
        const prevNode = this.get(index - 1);
        const nextNode =  prevNode.next;

        if (prevNode) {
            prevNode.next = node;
            node.next = nextNode;
            node.prev = prevNode;
            nextNode.prev = node;
        }

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const nodeToRemove = this.get(index);
        const prevNode = nodeToRemove.next;
        const nextNode = nodeToRemove.prev;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        nodeToRemove.prev = null;
        nodeToRemove.next = null;

        this.length--;
        return nodeToRemove;
    }
}