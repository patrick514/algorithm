/**
 *
 * @param nums 1,6,7,2,4,5,3
 * 1
 * 1,6
 * 1,2
 * 1,2,4
 * 1,2,4,5
 * 1,2,3,5
 * @returns
 */
function lengthOfLIS(nums: number[]): number {
  let g: number[] = [];
  for (const x of nums) {
    let j = lowerBound(g, x);
    if (j === g.length) {
      g.push(x);
    } else {
      g[j] = x;
    }
  }
  return g.length;
}
// 第一个大于等于某个目标值（target）的位置
function lowerBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
