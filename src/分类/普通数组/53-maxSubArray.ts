// function maxSubArray(nums: number[]): number {
//     let ans = nums[0];
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
        
//         if (sum > 0) {
//             sum += nums[i];
//         }else{
//             sum=nums[i];
//         }
//         ans = Math.max(ans,sum);
//     }
//     return ans;
// };
/**
 * 找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 * @param nums 
 */
function maxSubArray(nums: number[]): number {
    let ans = nums[0]
    let sum = 0
    
    
    for(let i = 0;i<nums.length;i++){
        //前面一堆需要大于0 才把他算上，这样才是递增的
        if(sum > 0){
            sum += nums[i]
        }
        //前面是负数，所以之前从现在开始算，因为前面是负增益
        else{
            sum = nums[i]
        }

        ans = Math.max(ans,sum)
    }

    return ans
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])