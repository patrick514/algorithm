import { MaxHeap } from "./maxHeap";
import { MinHeap } from "./minHeap";


// function findKthLargest(nums: number[], k: number): number {
//   const heap = new MaxHeap();
//   for (let i = 0; i < nums.length; i++) {
//     heap.push(nums[i]);
//   }
//   while(k-1>0){
//     heap.pop();
//       k--
//   }

//   return heap.peek();
// }

function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap()
    for(let i = 0;i<k;i++){
        heap.push(nums[i])
    }  
    // 先是k个元素的小根堆  然后剩下元素一个一个与根比较 比根大，进去，比跟小不管，
    // 剩下的根就是第k个大小的元素  维护堆的个数为k
      //  5
      //6
    for(let i = k;i<nums.length;i++){
        if(heap.peek() < nums[i]){
            heap.pop()
            heap.push(nums[i])
          
        }
    }

    return heap.peek()
};





findKthLargest([3, 2, 1, 5, 6, 4], 2);
