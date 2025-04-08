// function threeSum(nums: number[]): number[][] {
//     nums = nums.sort((a, b) => a - b);
//     let ans : number[][] = []
//     let n = nums.length
//     for(let i = 0;i<n-2;i++){
//         if(i>0 && nums[i] === nums[i-1]){
//             continue
//         }
//         let j = i+1
//         let k = n -1

//         while(j <k){
//             let s = nums[i] + nums[j] + nums[k]
//             if(s > 0){
//                 k--
//             }else if(s < 0){
//                 j++
//             }else{
//                 ans.push([nums[i],nums[j],nums[k]])
//                 j++
//                 while(j <k && nums[j] === nums[j-1]){
//                     j++
//                 }
//                 k--
//                 while(k > j && nums[k] === nums[k -1] ){
//                     k--
//                 }
//             }

//         }
//     }
//     return ans
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// function threeSum(nums: number[]): number[][] {
//     let ans: number[][] = [];
//     nums = nums.sort((a, b) => (a - b));
//     let n = nums.length - 1;
//     if (nums[0] > 0) {
//         return ans;
//     }
//     // i不动，l和r动
//     for (let i = 0; i <= n - 2; i++) {
//         //i要大于0，
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }
//         let l = i + 1;
//         let r = n;
//         while (l < r) {
//             let sum = nums[i] + nums[l] + nums[r];
//             if (sum > 0) {
//                 r--;
//             } else if (sum < 0) {
//                 l++;
//             } else {
//                 ans.push([nums[i], nums[l], nums[r]]);
//                 l++;
//                 //判断重复
//                 while(l < r && nums[l] === nums[l-1]){
//                     l++;
//                 }
//                 // r--;
//                 while (l < r && nums[r] === nums[r - 1]) {
//                     r--;
//                 }

//             }
//         }
//     }
//     return ans;
// }

/**
 * 
首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，
数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
如果 nums[i] == nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
当 sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R−−
时间复杂度：O(n2)，n 为数组长度
 * @returns 
 */
function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];
  nums.sort((a,b) => a-b);
  let n = nums.length - 1;
  if (nums[0] > 0) return [];
  for (let i = 0; i <= n - 2; i++) {
    // 当前数大于0，后面的数都比它大，不可能和为0
    if (nums[i] > 0) break;
    //i > 0 因为第一个不行
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = n;
    while (l < r) {
      let sum = nums[l] + nums[r] + nums[i];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        ans.push([nums[i], nums[l], nums[r]]);
        //去重  如果下一个等于当前算过的
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return ans;
}

threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]);
// console.log([-1, 0, 1, 2, -1, -4].sort());
// threeSum([0, 0, 0,0])
