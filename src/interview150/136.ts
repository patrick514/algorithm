function singleNumber(nums: number[]): number {
    let single = 0
    for(const item of nums){
        // 取异或   与自身异或得0  与0异或得自身
        single ^= item
    }
    return single
};