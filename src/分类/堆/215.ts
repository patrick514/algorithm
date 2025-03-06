function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap()
    for(let i = 0;i<k;i++){
        heap.push(nums[i])
    }

    for(let i = k;i<nums.length;i++){
        if(heap.peek() < nums[i]){
            heap.pop()
            heap.push(nums[i])
          
        }
    }

    return heap.peek()
};

class MinHeap {
    heap:number[]
    constructor() {
        this.heap = []
    }
    left(i:number) {
        return 2 * i + 1
    }

    right(i: number) {
        return 2 * i + 2
    }
    parentI(i: number) {
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
            const p = this.parentI(i)
            /// 父节点  小于  子节点
            if (p < 0 || this.heap[p] <= this.heap[i]){
                break
            }
            this.swap(p,i)
            //注意这一步
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
            const l = this.left(i)
            const r = this.right(i)
            let min = i
            if(l < this.heap.length && this.heap[l] < this.heap[min] ){
                min = l
            }
            if(r < this.heap.length && this.heap[r] < this.heap[min]){
                min = r
            }

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


findKthLargest([7, 6, 5, 4, 3, 2, 1],5)






