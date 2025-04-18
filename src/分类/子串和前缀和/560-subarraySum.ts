/**
 * 
 * @param nums 
 * @param k 
 * @returns 
 */
function subarraySum(nums: number[], k: number): number {
    let res = 0;
    //s是前缀和

    //对每个子前缀和 计次数
    const smap: Map<number, number> = new Map();
    let s: number = 0;
    smap.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
        //注意这里要在存入map的前面，不然会把自己加一次
        if (smap.has(s - k)) {
            res += smap.get(s - k)!;
        }
        smap.set(s, (smap.get(s) ?? 0) + 1);
    }
    return res;
}

subarraySum([1, -1, 0], 0);
