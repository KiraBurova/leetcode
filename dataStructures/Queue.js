class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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
      this.last.next = node;
      this.last = node;
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
