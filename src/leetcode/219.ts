function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            let preIndex = map.get(num);
            if (i - preIndex <= k) {
                return true;
            }
        }
        map.set(num, i);

    }
    return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log()