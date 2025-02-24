class NumArray {
    s:number[]
    constructor(nums: number[]) {
        this.s = new Array(nums.length+1);
        this.s[0] = 0;
        for(let i = 0;i<nums.length;i++){
            this.s[i+1] = this.s[i] + nums[i];
        }


    }

    sumRange(left: number, right: number): number {
        return this.s[right+1] - this.s[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */