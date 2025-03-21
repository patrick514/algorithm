class MaxHeap {
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
  size() {
    return this.heap.length;
  }
  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
/**
 * 堆就是存放在数组的完全二叉树
 * 入堆  最后一个向上交换
 * 出堆  最后一个与堆顶交换  弹出 最后一个 与子节点最大的交换
 */
class MinHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  /**
   *
   * @param i
   * @returns leftchild
   */
  left(i: number) {
    return 2 * i + 1;
  }

  right(i: number) {
    return 2 * i + 2;
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
      const p = this.parent(i);
      /// 父节点  小于  子节点
      if (p < 0 || this.heap[p] <= this.heap[i]) {
        break;
      }
      this.swap(p, i);
      //注意这一步 交换了，要换回来
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }
    // 堆顶元素 交换到数组末尾  弹出
    this.swap(0, this.heap.length - 1);
    const val = this.heap.pop();
    this.siftDown(0);
    return val;
  }

  siftDown(i: number) {
    while (true) {
      //左右孩子
      const l = this.left(i);
      const r = this.right(i);
      let min = i;
      //找左右孩子最小的 小根堆
      if (l < this.heap.length && this.heap[l] < this.heap[min]) {
        min = l;
      }
      if (r < this.heap.length && this.heap[r] < this.heap[min]) {
        min = r;
      }
      //都没有当前小 结束
      if (min === i) {
        break;
      }
      this.swap(min, i);
      i = min;
    }
  }

  swap(i: number, j: number) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  size() {
    return this.heap.length;
  }
}

class MedianFinder {
  minheap;
  maxheap;
  constructor() {
    this.maxheap = new MaxHeap();
    this.minheap = new MinHeap();
  }

  addNum(num: number): void {
    //小顶堆放大的一半， 大顶堆放小的一半  所以是大于等于
    if (this.minheap.size() === 0 || num >= this.minheap.peek()) {
      this.minheap.push(num);
      if (this.maxheap.size() + 1 < this.minheap.size()) {
        const mintop: number = this.minheap.peek()!;
        this.maxheap.push(mintop);
        this.minheap.pop();
      }
    } else {
      this.maxheap.push(num);
      //这里不能加1 保持大根堆 一直小于等于 小根堆
      if (this.minheap.size() < this.maxheap.size()) {
        const maxtop: number = this.maxheap.peek()!;
        this.minheap.push(maxtop);
        this.maxheap.pop();
      }
    }
  }

  findMedian(): number {
    if (this.maxheap.size() === this.minheap.size()) {
      return (this.minheap.peek() + this.maxheap.peek()) / 2;
    } else {
      return this.minheap.peek();
    }
  }
}

let medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // 返回 1.5 ((1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian());
