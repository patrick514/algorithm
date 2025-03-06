function removeElement(nums: number[], val: number) {
    let j = 0
    let nums1:number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums1[j] = nums[i];
            j++
        }
    }
    nums = nums1
    console.log(nums1)
    console.log(nums)
};
removeElement([3, 2, 2, 3], 3);

