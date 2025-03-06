function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1
    //  [3,-1,  0,  1,2]
    // 最小值  小于左边  也小于右边
    // mid > right  最小在右边
    // mid < right  最小在左边
    while(left < right){
        let mid  =  Math.floor((right-left)/2) + left

        if(nums[mid] > nums[right]){
            left = mid + 1
        }else{
            // mid 不要减1
            right = mid 
        }

    }
    return nums[left]
};


console.log(findMin([4, 5, 6, 7, 0, 1, 2]))