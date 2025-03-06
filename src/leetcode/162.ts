// function findPeakElement(nums: number[]): number {
//     let max = -Infinity
//     let maxi 
//     //直接找到最大值  找到最高的那座山峰
//     for(let i =0;i<nums.length;i++){
//         if(nums[i] > max){
//             max = nums[i]
//             maxi = i
//         }
//     }
    
//     return maxi

// };


function findPeakElement(nums: number[]): number {
    let mid
    let left = 0
    let right = nums.length -1

    //由于边界是 无穷小   每次往高坡爬   总能找到高峰
    //  1   2    1        3           5   6  4
    while(left < right){
        mid = Math.floor((right - left)/2) + left
        if(nums[mid] < nums[mid + 1]){
            left = mid + 1
        }else{
            right = mid
        }
    }

    return left

};


console.log(findPeakElement([1, 2,1,3]))