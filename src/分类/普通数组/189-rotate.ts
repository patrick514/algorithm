/**
 Do not return anything, modify nums in-place instead.
 */
// function rotate(nums: number[], k: number): void {
//    //使用新数组
//     let nums1:number[] = [];
//     if(nums.length===0){
//         return
//     }else if(nums.length === 1 && k ===1){
//         return
//     }else{
//         for(let i = 0;i<nums.length;i++){
//             let index = (i+k)%nums.length;
//             nums1[index] = nums[i];
//         }
//     }
//     for(let i = 0;i<nums.length;i++){
//         nums[i] = nums1[i];
//     }
// };

/**
 * 使用新数组  非原地
 * @param nums
 * @param k
 */
function rotate(nums: number[], k: number): void {
    let nums1: number[] = [];
    let n = nums.length;
    if (nums.length <= 1) {
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        nums1[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums1[i];
    }
}

/**
 * 原地
 * 反转整个
 * 反转  前k个  下标要-1
 * 反转 后n-k个
 * @param nums
 * @param k
 */
function rotate(nums: number[], k: number): void {
    const reverse = (arr: number[], left: number, right: number) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    };
    //注意这里要取余 因为k如果大于length 就会越界
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
