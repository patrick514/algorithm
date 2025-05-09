// function findMin(nums: number[]): number {
//     let left = 0
//     let right = nums.length - 1
//     //  [3,-1,  0,  1,2]
//     // 最小值  小于左边  也小于右边
//     // mid > right  最小在右边
//     // mid < right  最小在左边
//     while(left < right){
//         let mid  =  Math.floor((right-left)/2) + left

//         if(nums[mid] > nums[right]){
//             left = mid + 1
//         }else{
//             // mid 不要减1
//             right = mid
//         }

//     }
//     return nums[left]
// };

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  // 中间 大于 最右 说明最小值在 右半 比如3,4,5,1,2
  while (left < right) {
    // 注意这里是 < 而不是 <= 当left 等于 right 无限循环执行righ = mid
    let mid = Math.floor((right - left) / 2 + left);

    if (nums[mid] > nums[right]) {
      // 如果中间值大于最右值，说明最小值在右半部分
      left = mid + 1;
    } else {
      // 如果中间值小于等于最右值，说明最小值在左半部分或是中间值本身
      right = mid; // 这里不能是 mid - 1，因为 mid 可能是最小值
    }
  }

  return nums[left];
}

function findMin1(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  //不取等 因为right 和left相等 会无限循环
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

console.log(findMin1([3, 1, 2]));
