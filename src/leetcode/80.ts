function removeDuplicates(nums: number[]): number {
    let length = nums.length
    let slow = 2, fast = 2
    if (nums.length <= 2) {
        return length
    }
    else {
        while (fast < length) {
            if (nums[slow - 2] !== nums[fast]) {
                nums[slow] = nums[fast]
                slow++
            }
            fast++
        }
    }
    return slow
};
removeDuplicates([1, 1, 1, 2, 2, 3])
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])