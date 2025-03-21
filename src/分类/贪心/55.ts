function canJump(nums: number[]): boolean {
    // let pass = false


    for(let i = nums.length - 1;i >= 0;i--){
        if(nums[i] + i >= nums.length-1 ){
            nums.length = i+1
        }
    }
    if(nums.length === 1){
        return true
    }

    return false
};
console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))