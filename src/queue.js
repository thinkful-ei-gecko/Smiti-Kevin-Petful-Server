class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  display() {
    if (this.first === null) {
      return null;
    }
    let curr = this.first;
    while (curr !== null) {
      console.log({
        data: curr.data,
        next: curr.next ? curr.next.data : null,
      });
      curr = curr.next;
    }
  }

  toArray() {
    if (this.first === null) {
      return null;
    }
    let arr = [];
    let curr = this.first;
    while (curr !== null) {
      arr.push(curr);
      curr = curr.next;
    }
    return arr;
  }

  peek() {
    return this.first;
  }

  enqueue(data) {
    let node = new _Node(data, null);
    if (!this.first) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    let node = this.first;
    if (node === null) {
      return null;
    }
    this.first = node.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

module.exports = Queue;