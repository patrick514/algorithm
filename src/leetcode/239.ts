function maxSlidingWindow(nums: number[], k: number): number[] {

    let res: number[] = [];
    let len = nums.length;
    //双端队列存的 最大值的下标
    let deque: number[] = [];
    let left = 0;
    for (let right = 0; right < len; right++) {
        //把所有小于当前值的  全去掉
        while (deque.length && nums[deque[deque.length - 1]] <= nums[right]) {
            deque.pop();
        }
        deque.push(right);
        //队首不在视野内
        if (right - deque[0] >= k) {
            deque.shift();
        }
        // 只要大于k 就可以输出最大值了，输出len - k + 1
        if(right >= k-1){
            res.push(nums[deque[0]]);
        }
    }

    return res;

};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
// maxSlidingWindow([1,-1], 1)
