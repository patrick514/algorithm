/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
   //使用新数组
    let nums1:number[] = [];
    if(nums.length===0){
        return
    }else if(nums.length === 1 && k ===1){
        return
    }else{
        for(let i = 0;i<nums.length;i++){
            let index = (i+k)%nums.length;
            nums1[index] = nums[i];
        }
    }
    for(let i = 0;i<nums.length;i++){
        nums[i] = nums1[i];
    }
};
rotate([1, 2, 3, 4, 5, 6, 7], 3)