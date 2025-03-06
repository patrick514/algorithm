function twoSum(nums: number[], target: number): number[] {
    const hashtable: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; ++i) {
        // if (hashtable.has(target - nums[i])) {
        const com = hashtable.get(target - nums[i])
        if(com !== undefined){
            return [com , i];
        }
        // }
        hashtable.set(nums[i], i);
    }
    return [];
};