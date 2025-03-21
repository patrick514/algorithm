export class MaxHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  left(i: number) {
    return 2 * i + 1;
  }
  right(i: number) {
    return i * 2 + 2;
  }
  parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  peek() {
    return this.heap[0];
  }

  push(val: number) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }

  siftUp(i: number) {
    while (true) {
      let p = this.parent(i);
      if (p < 0 || this.heap[i] < this.heap[p]) {
        break;
      }
      this.swap(p, i);
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }
    this.swap(0, this.heap.length - 1);
    const val = this.heap.pop();
    this.siftDown(0);
    return val;
  }

  siftDown(i: number) {
    while (true) {
      const l = this.left(i);
      const r = this.right(i);
      let max = i;
      if (l < this.heap.length && this.heap[max] < this.heap[l]) {
        max = l;
      }
      if (r < this.heap.length && this.heap[max] < this.heap[r]) {
        max = r;
      }

      if (max === i) {
        break;
      }
      this.swap(i, max);
      i = max;
    }
  }
  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
