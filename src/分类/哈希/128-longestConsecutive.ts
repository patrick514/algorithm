// function longestConsecutive(nums: number[]): number {
//     let map = new Map()
//     for(let i = 0;i<nums.length;i++){
//         if(!map.has(nums[i])){
//             map.set(nums[i],1)
//         }
//     }
//     let longgest = 0
//     let currentnum = 0
//     let long = 0
//     for(let j = 0;j<nums.length;j++){
//         if(!map.has(nums[j] -1)){
//             currentnum = nums[j]
//             long   = 1
//         }
//         while(map.has(currentnum + 1)){
//             currentnum++
//             long++
//         }
//         longgest = Math.max(long,longgest)
//     }
//     return longgest
// };

// 简单来说就是每个数都判断一次这个数是不是连续序列的开头那个数。

// function longestConsecutive(nums: number[]): number {
//     let ans = 0;
//     // const map = new Map();
//     //用集合去除重复的元素
//     const numSet = new Set(nums);
//     for(const num of numSet){
//         //找到序列开头的元素，没有前一个就是开头
//         if(!numSet.has(num-1)){
//             let curNum  = num;//数
//             let curS = 1;//个数
//             //该元素后面所有元素的计数
//             while(numSet.has(curNum+1)){
//                 curNum++;
//                 curS++;
//             }
//             ans = Math.max(ans,curS)
//         }
//     }

//     return ans;
// };

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let res = 0;
  //要先取出重复元素
  for (const num of set) {
    if (!set.has(num - 1)) {
      let curNum = num;
      let cnt = 1;
      while (set.has(curNum + 1)) {
        cnt++;
        curNum++;
      }
      res = Math.max(res, cnt);
    }
  }
  return res;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
