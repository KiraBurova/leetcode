class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(value) {
    const node = new Node(value);

    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.size) return null;

    const temp = this.first;

    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return temp.value;
  }
}
