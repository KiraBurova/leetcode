class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }
  DFSPreOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);

    return data;
  }
  DFSPostOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node);
    }

    traverse(current);

    return data;
  }
  DFSInOrder() {
    const data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);

    return data;
  }
}
