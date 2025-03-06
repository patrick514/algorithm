// function minSubArrayLen(target: number, nums: number[]): number {
//     let len = nums.length+1
    
//     for(let i = 0;i<nums.length;i++){
//         let sum = 0
//         for(let j = i;j<nums.length;j++){
//             sum += nums[j]
//             if(sum >= target){
//                 len = Math.min(len,j-i+1)
//             }
//         }
//     }
//     return len
// };

function minSubArrayLen(target: number, nums: number[]): number {
    let left=0,right=0
    let sum = 0
    let ans = nums.length+1
    for(right = 0;right<nums.length;right++){
        sum += nums[right]
        while(sum - nums[left] >= target){
            sum -= nums[left]
            left++
        }
        if(sum >=target){
            ans = Math.min(ans,right -left +1)
        }
    }
    return ans <=nums.length ? ans : 0
};


console.log(minSubArrayLen(7,[2, 3, 1, 2, 4, 3]))