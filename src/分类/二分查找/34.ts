// function searchRange(nums: number[], target: number): number[] {

//     //[5,8,8,   8,   8,10,12]
//     // while (left <= right)：适用于需要遍历完整的区间，包括 left 和 right，
//     // 通常用来查找具体目标值，确保每个元素都被检查。
//     // while (left < right)：适用于收敛到单个位置的情况，适合查找边界或满足某种条件的值。
//     let first: number = -1
//     let end: number = -1

//     let left = 0
//     let right = nums.length - 1

//     while (left <= right) {
//         let mid1 = Math.floor((right - left) / 2) + left
//         if (nums[mid1] === target) {
//             first = mid1
//             right--
//             // left--
//         }
//         else if (nums[mid1] < target) {
//             left = mid1 + 1
//         } else {
//             right = mid1 - 1
//         }
//     }

//     left = 0
//     right = nums.length - 1
//     while (left <= right) {
//         let mid2 = Math.floor((right - left) / 2) + left
//         if (nums[mid2] === target) {
//             end = mid2
//             left++
//             // right++
//         }
//         else if (nums[mid2] < target) {
//             left = mid2 + 1
//         } else {
//             right = mid2 - 1
//         }
//     }
//     return [first,end]
// };
//两次二分
function searchRange(nums: number[], target: number): number[] {
  let first = -1;
  let end = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid1 = Math.floor((right - left) / 2 + left);
    //找到后继续找，第一个就一直往左边找
    if (nums[mid1] === target) {
      first = mid1;
      right = mid1 - 1;
    } else if (nums[mid1] < target) {
      left = mid1 + 1;
    } else {
      right = mid1 - 1;
    }
  }
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid2 = Math.floor((right - left) / 2 + left);
    //找到后继续找，最后一个就一直往右边找
    if (nums[mid2] === target) {
      end = mid2;
      left = mid2 + 1;
    } else if (nums[mid2] < target) {
      left = mid2 + 1;
    } else {
      right = mid2 - 1;
    }
  }
  return [first, end];
}
searchRange([5, 7, 7, 8, 8, 10], 8);
