function insert(intervals: number[][], newInterval: number[]): number[][] {
    intervals.push(newInterval)
    intervals = intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
    let mergeIntervals: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (mergeIntervals.length === 0 || mergeIntervals[mergeIntervals.length - 1][1] < intervals[i][0]) {
            // 没有重叠，直接添加
            mergeIntervals.push(intervals[i]);
        } else {
            // 存在重叠，合并区间
            mergeIntervals[mergeIntervals.length - 1][1] = Math.max(mergeIntervals[mergeIntervals.length - 1][1], intervals[i][1]);
        }
    }

    return mergeIntervals;
};
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))