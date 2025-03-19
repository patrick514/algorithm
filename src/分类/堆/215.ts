// function findKthLargest(nums: number[], k: number): number {
//   const heap = new MaxHeap();
//   for (let i = 0; i < nums.length; i++) {
//     heap.push(nums[i]);
//     if (heap.heap.length > k) {
//       heap.pop();
//     }
//   }
//   return heap.peek();
// }

function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap()
    for(let i = 0;i<k;i++){
        heap.push(nums[i])
    }
    // 先是k个元素的小根堆  然后剩下元素一个一个与根比较，剩下的根就是第k个大小的元素
    for(let i = k;i<nums.length;i++){
        if(heap.peek() < nums[i]){
            heap.pop()
            heap.push(nums[i])
          
        }
    }

    return heap.peek()
};

/**
 * 堆就是存放在数组的完全二叉树
 * 入堆  最后一个向上交换
 * 出堆  最后一个与堆顶交换  弹出 最后一个 与子节点最大的交换
 */
class MinHeap {
    heap:number[]
    constructor() {
        this.heap = []
    }
    /**
     *
     * @param i
     * @returns leftchild
     */
    left(i:number) {
        return 2 * i + 1
    }

    right(i: number) {
        return 2 * i + 2
    }
    parent(i: number) {
        return Math.floor((i - 1) / 2)
    }

    peek() {
        return this.heap[0]
    }

    push(val:number) {
        this.heap.push(val)
        this.siftUp(this.heap.length - 1)
    }

    siftUp(i: number) {
        while (true) {
            const p = this.parent(i)
            /// 父节点  小于  子节点
            if (p < 0 || this.heap[p] <= this.heap[i]){
                break
            }
            this.swap(p,i)
            //注意这一步 交换了，要换回来
            i = p
        }
    }

    pop(){
        if(this.heap.length === 0){
            return 0
        }
        // 堆顶元素 交换到数组末尾  弹出
        this.swap(0,this.heap.length-1)
        const val = this.heap.pop()
        this.siftDown(0)
        return val

    }

    siftDown(i: number) {
        while(true){
            //左右孩子
            const l = this.left(i)
            const r = this.right(i)
            let min = i
            //找左右孩子最小的 小根堆
            if(l < this.heap.length && this.heap[l] < this.heap[min] ){
                min = l
            }
            if(r < this.heap.length && this.heap[r] < this.heap[min]){
                min = r
            }
            //都没有当前小 结束
            if(min === i){
                break
            }
            this.swap(min,i)
            i = min
        }
    }

    swap(i: number, j: number) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

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
  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

findKthLargest([3, 2, 1, 5, 6, 4], 2);
