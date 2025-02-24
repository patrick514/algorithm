function majorityElement(nums: number[]): number {
    let majority = 0 
    let cnt = 0
    const countsMap : { [key: number]: number } = {}
    for(const num of nums){
        countsMap[num] = (countsMap[num] || 0) + 1
        if(countsMap[num] > cnt){
            majority = num
            cnt = countsMap[num]
        }
    }
    return majority
};
console.log(majorityElement([3,2,3]))