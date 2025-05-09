

/**
 * 滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 * @param nums 
 * @param k 
 * @returns 
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];

    const deque: number[] = []; //存储最大值的下标 队首始终是最大值

    let left = 0;
    let right = 0;

    for (right = 0; right < nums.length; right++) {
        //入
        //把队列中小于当前值的去除 因为当前值会一直在窗口 比这些值晚出去
        while (deque.length && nums[deque[deque.length - 1]] <= nums[right]) {
            deque.pop();
        }
        deque.push(right);

        //出 队首离开窗口
        if (right - deque[0] + 1 > k) {
            deque.shift();
        }

        //记录结果
        //当窗口大小达到k时，才开始计入结果
        if (right >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// maxSlidingWindow([1,-1], 1)
