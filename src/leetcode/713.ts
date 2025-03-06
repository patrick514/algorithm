function numSubarrayProductLessThanK(nums: number[], k: number): number {

    if(k <= 1){
        return 0
    }
    let sum = 1
    let right = 0
    let left = 0
    let ans = 0
    while(right < nums.length){
        sum *= nums[right]
        //
        while(sum >= k){
            sum /= nums[left]
            left++
        }
        ans += right -left + 1
        right++
    }
    return ans
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6],100))