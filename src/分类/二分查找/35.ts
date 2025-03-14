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

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //避免溢出
    let mid = Math.floor((right - left) / 2 + left);
    if (nums[mid] < target) {
      left = mid + 1;
    }
    //不管找没找到，mid等于target right是mid前一个，mid大于target，right也是mid前一个 
    else {

      right = mid - 1;
    }
  }
  //right 最终停在比 target 小的元素位置
  return left;
};


console.log(searchInsert([1, 3, 5, 6],5))