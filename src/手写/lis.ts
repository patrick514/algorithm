/**
 *
 * @param nums 1,6,7,2,4,5,3
 * 1
 * 1,6
 * 1,6,7
 * 1,2,7
 * 1,2,4
 * 1,2,4,5
 * 1,2,3,5
 * @returns
 */
// function lengthOfLIS(nums: number[]): number {
//   let g: number[] = [];
//   for (const x of nums) {
//     let j = lowerBound(g, x);
//     if (j === g.length) {
//       g.push(x);
//     } else {
//       g[j] = x;
//     }
//   }
//   return g.length;
// }
// // 第一个大于等于某个目标值（target）的位置
// function lowerBound(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length;
//   while (left < right) {
//     let mid = Math.floor((right - left) / 2 + left);
//     if (nums[mid] >= target) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return right;
// }

/**
 *
 * @param nums 数组
 * @param target 目标值
 * @returns 第一个大于等于某个目标值（target）的位置
 */
function lowerBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (nums[mid] >= target) {
      //这里 找到离目标最近的  大于等于他的值
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
lengthOfLIS([1, 6, 7, 2, 4, 5, 3]);
// lengthOfLIS([0, 1, 0, 3, 2, 3]);

// * @param nums 1,6,7,2,4,5,3
//  * 1
//  * 1,6
//  * 1,6,7
//  * 1,2,7
//  * 1,2,4
//  * 1,2,4,5
// 1,2,3,5
// g数组最终的[1,2,3,5]不是原数组的一个子序列
//数组的长度4正确地反映了最长递增子序列的长度

function lengthOfLIS(nums: number[]): number {
  const g: number[] = [];
  for (const x of nums) {
    let j = lowerBound(g, x);
    if (g.length === j) {
      g.push(x);
    } else {
      g[j] = x;
    }
  }
  return g.length;
}

// function getLIS(nums: number[]): number[] {
//   if (nums.length === 0) return [];

//   const g: number[] = []; // g数组存储当前最优解
//   const pos: number[] = []; // pos[i]表示g[i]的来源索引
//   const prev: number[] = new Array(nums.length).fill(-1); // prev[i]表示nums[i]的前驱节点
//   //1, 6, 7, 2, 4, 5, 3
//   for (let i = 0; i < nums.length; i++) {
//     const x = nums[i];
//     let j = lowerBound(g, x);

//     // 记录前驱节点
//     if (j > 0) {
//       prev[i] = pos[j - 1];
//     }

//     if (j === g.length) {
//       g.push(x);
//       pos.push(i);
//     } else {
//       g[j] = x;
//       pos[j] = i;
//     }
//   }

//   // 回溯构造结果
//   const result: number[] = [];
//   let currentIndex = pos[pos.length - 1];

//   while (currentIndex !== -1) {
//     result.unshift(nums[currentIndex]);
//     currentIndex = prev[currentIndex];
//   }

//   return result;
// }
/**
 * 
 * @param nums 数组
 * @returns 最长递增子序列 
 */
function getLIS(nums: number[]): number[] {
  if (nums.length === 0) return [];
  let result: number[] = [];

  const g: number[] = []; //记录的后续最优的解，但不是递增子序列
  const pos: number[] = []; //g的索引
  const pre: number[] = Array(nums.length).fill(-1); //表示nums[i]的前驱节点

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    let j = lowerBound(g, x);
    //找到了，有前驱节点
    if (j > 0) {
      pre[i] = pos[j - 1];
    }

    //如果找到的大于等于这个数 是最后一个
    if (j === g.length) {
      g.push(x);
      pos.push(i);
    }
    //不是最后一个
    else {
      g[j] = x;
      pos[j] = i;
    }
  }
  //倒着一个一个回溯
  let currentIndex = pos[pos.length - 1];
  while (currentIndex !== -1) {
    result.unshift(nums[currentIndex]);
    currentIndex = pre[currentIndex];
  }
  return result;
}
getLIS([1, 6, 7, 2, 4, 5, 3]);
