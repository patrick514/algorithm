function maxSubArray(nums: number[]): number {
    let ans = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        
        if (sum > 0) {
            sum += nums[i];
        }else{
            sum=nums[i];
        }
        ans = Math.max(ans,sum);
    }
    return ans;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])