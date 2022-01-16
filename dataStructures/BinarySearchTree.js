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

        while(true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left
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

        while(!found && current) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true
            }
        }
        if (!found) return undefined;
        return current;
    }
}