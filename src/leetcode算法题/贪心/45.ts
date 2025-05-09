// function jump(nums: number[]): number {
//     let jumpcnt = 0
//     // let max = 0
//     // let end = nums.length
//     // for (let i = end - 2; i >= 0; i--) {
//     //     if (i === 0) {
//     //         end = end - max
//     //         i = end-1
//     //         jumpcnt++
//     //     }
//     //     if (nums[i] + i >= end - 1) {

//     //         if (nums[i] >= max) {
//     //             max = nums[i]
//     //         }

//     //     }

//     // }
//     let farest = 0
//     let edge = 0
//     for(let i = 0;i<nums.length-1;i++){
//         farest = Math.max(farest,i+nums[i])
//         if(i === edge){
//             jumpcnt++
//             // i = farest
//             edge = farest
//         }
//     }
//     return jumpcnt
// };


function jump(nums: number[]): number {
  let farest = 0; //下一座 更长的桥 的长度
  let cnt = 0; //建桥的次数
  let bridge = 0; // 已建的桥
  // 当 i=n−2 时，如果 i<curRight，说明可以到达 n−1；如果 i=curRight，我们会造桥，这样也可以到达 n−1。
  for (let i = 0; i < nums.length - 1; i++) {
    farest = Math.max(farest, nums[i] + i);
    //无路可走 必须建桥
    if (i === bridge) {
      cnt++;
      bridge = farest; // 建桥后的新长度
    }
  }

  return cnt;
};
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([0]))
console.log(jump([1, 2]))