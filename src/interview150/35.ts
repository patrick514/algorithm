function searchInsert(nums: number[], target: number): number {
    let left,right
    let mid : number = 0
    left = 0;
    right = nums.length -1  

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
            //关键就在大于等于
        } else {
            right = mid - 1;
        }
    }
    return left;
   
};


console.log(searchInsert([1, 3, 5, 6],2))