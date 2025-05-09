// //简单看看
// function moveZeroes(nums: number[]): void {
//   let left = 0;
//   let right = 0;
//   while (right < nums.length) {
//     if (nums[right]) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//     }
//     right++;
//   }
//   // console.log(nums)
// }

//简单看看 将非0 的左移
function moveZeroes(nums: number[]): void {
    let left = 0
    let right = 0
    while(right < nums.length){
        if(nums[right] !== 0){
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
        }
        right++
    }
    console.log(nums)
};

moveZeroes([0, 1, 0, 3, 12]);
