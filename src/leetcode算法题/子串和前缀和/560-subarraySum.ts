/**
 *给你一个整数数组 nums 和一个整数 k ，
请你统计并返回 该数组中和为 k 的子数组的个数 。
子数组是数组中元素的连续非空序列。
 * @param nums
 * @param k
 * @returns
 */
function subarraySum(nums: number[], k: number): number {
    let res = 0;
    let s = Array(nums.length + 1).fill(0); //前缀和数组
    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] + nums[i];
    }

    //结果求的是  sItem - 某个前缀和 = k  有多少个
    //记录前缀sItem每个值的次数
    const cnt = new Map();
    for (const sItem of s) {
        res += cnt.get(sItem - k) ?? 0 ;
        cnt.set(sItem, (cnt.get(sItem) ?? 0) + 1);
    }

    return res;
}
// s  0, 1 ,2 ,3
// Map 0:1 1:1 2:1 3:1
subarraySum([1, 1, 1], 2);
