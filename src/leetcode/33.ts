function search(nums: number[], target: number): number {


    //  [4,5,6,7,0,1,2]
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            return mid
        }

        //左半部分有序
        if (nums[left] <= nums[mid]) {
            //在 左半里
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            //不在 左半
            } else {
                left = mid + 1
            }
        }
        //右半部分有序
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }

        }
    }
    return -1
};