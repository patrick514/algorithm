// function canJump(nums: number[]): boolean {
//     // let pass = false

//     for(let i = nums.length - 1;i >= 0;i--){
//         if(nums[i] + i >= nums.length-1 ){
//             nums.length = i+1
//         }
//     }
//     if(nums.length === 1){
//         return true
//     }

//     return false
// };

//如果可以从起点跳到终点，那么一定存在一条路径
// function canJump(nums: number[]): boolean {
//   let lastPos = nums.length - 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] + i >= lastPos) {
//       lastPos = i;
//     }
//   }
//   return lastPos === 0;
// }

function canJump(nums: number[]): boolean {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果当前能到的最大距离  小于 下一个 则不行
    if (i <= maxLen) {
      maxLen = Math.max(maxLen, nums[i] + i);
      if (maxLen >= nums.length - 1) {
        return true;
      }
    }
    else{
      return false
    }
  }
  return false;
}
console.log(canJump([0, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
