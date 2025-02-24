function summaryRanges(nums: number[]): string[] {
    let ans: string[] = [];
    let start: number = 0;

    while (start < nums.length) {
        let end = start;

        // 查找连续序列的结尾
        while (end + 1 < nums.length && nums[end + 1] === nums[end] + 1) {
            end++;
        }

        // 生成范围字符串
        if (end > start) {
            ans.push(`${nums[start]}->${nums[end]}`);
        } else {
            ans.push(nums[start].toString());
        }

        // 更新 start 为下一个位置
        start = end + 1;
    }

    return ans;
}

console.log(summaryRanges([]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))