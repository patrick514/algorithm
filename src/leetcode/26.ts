// // function removeDuplicates(nums: number[]) {
// //     let k  = 0;
// //     for(let i = 1 ; i< nums.length;i++){
// //         if(nums[i] != nums[k]){
// //             k++
// //             nums[k] = nums[i];
            
// //         }
// //     }
// //     k++
// //     console.log(nums)
// //     console.log(k)
// //     return k
// // };
// // removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// // removeDuplicates([1,1,2])

// function removeDuplicates(nums: number[]): number {
//     let length = nums.length
//     let slow = 2, fast = 2
//     if (nums.length <= 2) {
//         return 0
//     }
//     else {
//         while (fast < length) {
//             if (nums[fast] !== nums[fast-1]) {
//                 nums[slow] = nums[fast]
//                 slow++
//             }
//             // if(nums[slow - 1] === nums[slow]){
//             //     // if(nums[slow-1] === nums[])
//             // }
//             fast++
//         }
//     }
//     return slow
// };
// removeDuplicates([1, 1, 1, 2, 2, 3])
// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])

