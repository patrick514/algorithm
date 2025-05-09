// function searchInsert(nums: number[], target: number): number {
//     let left,right
//     let mid : number = 0
//     left = 0;
//     right = nums.length -1

//     while (left <= right) {
//         mid = Math.floor((left + right) / 2);
//         if (nums[mid] < target) {
//             left = mid + 1;
//             //关键就在大于等于
//         } else {
//             right = mid - 1;
//         }
//     }
//     return left;

// };

/**
 * 搜索插入位置
 * @param nums
 * @param target
 * @returns
 */
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  //为什么 left 循环结束 left = right + 1 left为最后小于target的后一个数
  return left
}

console.log(searchInsert([1, 3, 4, 6], 5));
