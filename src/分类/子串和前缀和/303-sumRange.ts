/**
 * 给定一个整数数组  nums
 * 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，
 * 其中 left <= right
 * s[right+1]−s[left]
 * 注意 是s[0] = 0 因为第零个数前缀和，前面没有数，所以是0
 * 数组 [−2,0,3,−5,2,−1]，对应的前缀和数组 s=[0,−2,−2,1,−4,−2,−3]

 * 
 */
class NumArray {
    s:number[]
    constructor(nums: number[]) {
        this.s = Array(nums.length+1)
        this.s[0] = 0
        for(let i = 0;i<nums.length;i++){
            this.s[i + 1] = this.s[i] + nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        return this.s[right + 1] - this.s[left]
    }
}
