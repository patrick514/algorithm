/**
 * 堆就是存放在数组的完全二叉树
 * 入堆  最后一个向上交换
 * 出堆  最后一个与堆顶交换  弹出 最后一个 与子节点最大的交换
 */
class MinHeap {
  heap: number[][];
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

  push([key, val]: [number, number]) {
    this.heap.push([key, val]);
    this.siftUp(this.heap.length - 1);
  }

  siftUp(i: number) {
    while (true) {
      const p = this.parent(i);
      /// 父节点  小于  子节点
      if (p < 0 || this.heap[p][1] <= this.heap[i][1]) {
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
      if (l < this.heap.length && this.heap[l][1] < this.heap[min][1]) {
        min = l;
      }
      if (r < this.heap.length && this.heap[r][1] < this.heap[min][1]) {
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
}

function topKFrequent(nums: number[], k: number): number[] {
  const cntMap = new Map();
  for (const i of nums) {
    if (cntMap.has(i)) {
      cntMap.set(i, cntMap.get(i) + 1);
    } else {
      cntMap.set(i, 1);
    }
  }
  const ans: number[] = [];

  let heap = new MinHeap();
  for (const [key, val] of cntMap) {
    if (heap.heap.length === k) {
      if (val > heap.heap[0][1]) {
        heap.pop();
        heap.push([key, val]);
      }
    } else {
      heap.push([key, val]);
    }
  }
  while (heap.heap.length > 0) {
    ans.push(heap.heap[0][0]);
    heap.pop();
  }
  return ans;
}

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
