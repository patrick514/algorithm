/**
 * 子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if(k <= 1){
        return 0
    }
  let n = nums.length;
  let ans = 0;
  let left = 0;
  let s = 1;
  for (let right = 0; right < n; right++) {
    s *= nums[right];

    while (s >= k) {
      s /= nums[left];
      left++;
    }
    // 这里为什么是right- left+1 10 ，5 ，2   5   10一个一个加
    // 当我们确定了右端点 right
    // 左端点可以从 left 取到 right
    // 这些位置的每一个都能形成一个有效的子数组
    // 所以子数组个数就是这个区间的长度：right - left + 1
    ans += right - left + 1;
  }

  return ans;
}
numSubarrayProductLessThanK([10, 5, 2, 6], 100);
