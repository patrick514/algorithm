function longestConsecutive(nums: number[]): number {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }
    }
    let longgest = 0
    let currentnum = 0
    let long = 0
    for(let j = 0;j<nums.length;j++){
        if(!map.has(nums[j] -1)){
            currentnum = nums[j]
            long   = 1
        }
        while(map.has(currentnum + 1)){
            currentnum++
            long++
        }
        longgest = Math.max(long,longgest)
    }
    return longgest
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))