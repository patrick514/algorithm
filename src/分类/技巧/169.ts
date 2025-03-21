// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。
// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
//哈希表    记录次数，输出最大的那个
// function majorityElement(nums: number[]): number {
//     let majority = 0 
//     let cnt = 0
//     const countsMap : { [key: number]: number } = {}
//     for(const num of nums){
//         countsMap[num] = (countsMap[num] || 0) + 1
//         if(countsMap[num] > cnt){
//             majority = num
//             cnt = countsMap[num]
//         }
//     }
//     return majority
// };

// 排序，中间的一定是众数
//随机选取一个，记录他的次数，如果大于n/2则返回
function majorityElement(nums: number[]): number {
    let major = Math.floor(nums.length/2)
    while(true){
        //随机选择的下标
        let candidate = Math.floor(Math.random() * (nums.length))
        let cnt = count(nums,nums[candidate])
        if(cnt > major){
            return nums[candidate]
        }
    }
};
function count(nums:number[],num:number){
    let count = 0
    for(const i of nums){
        if(i === num){
            count++
        }
    }
    return count
}
console.log(majorityElement([3,2,3]))