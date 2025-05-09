/**
 * 最小子数组 的和 大于等于target 
 * @param target 
 * @param nums 
 * @returns 最小子数组的最小长度
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let s = 0;
  let ans = n + 1;
  //右边一直加
  for (right = 0; right < n; right++) {
    let x = nums[right];
    s += x;
    //第一种写法
    // //减去左边 一直到长度最小
    // while (s - nums[left] >= target) {
    //   s -= nums[left];
    //   left++;
    // }
    // //如果大于等于target 是结果
    // if (s >= target) {
    //   ans = Math.min(ans, right - left + 1);
    // }

    //第二种写法
    while(s >= target){
        ans = Math.min(ans, right - left +1)
        s -= nums[left]
        left++
    }
  }

  return ans <= n ? ans : 0;
}
