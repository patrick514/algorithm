function jump(nums: number[]): number {
    let jumpcnt = 0
    // let max = 0
    // let end = nums.length
    // for (let i = end - 2; i >= 0; i--) {
    //     if (i === 0) {
    //         end = end - max
    //         i = end-1
    //         jumpcnt++
    //     }
    //     if (nums[i] + i >= end - 1) {

    //         if (nums[i] >= max) {
    //             max = nums[i]
    //         }

    //     }

    // }
    let farest = 0
    let edge = 0
    for(let i = 0;i<nums.length-1;i++){
        farest = Math.max(farest,i+nums[i])
        if(i === edge){
            jumpcnt++
            // i = farest
            edge = farest
        }
    }
    return jumpcnt
};
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([0]))
console.log(jump([1, 2]))