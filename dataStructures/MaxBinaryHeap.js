class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // add to the end
  // bubble up
  insert(element) {
    this.values.push(element);
    let indexOfNewValue = this.values.length - 1;
    let value = this.values[indexOfNewValue];

    while (indexOfNewValue > 0) {
      let parentIndex = Math.floor((indexOfNewValue - 1) / 2);
      let parent = this.values[parentIndex];

      if (value <= parent) break;

      this.values[parentIndex] = value;
      this.values[indexOfNewValue] = parent;
      indexOfNewValue = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild;
        let rightChild;
        let swap = null;
        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];

          if (leftChild > element) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];

          if ((!swap && rightChild > element) || (swap && rightChild > leftChild)) {
            swap = rightChildIndex;
          }
        }

        if (!swap) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }

    return max;
  }
}
