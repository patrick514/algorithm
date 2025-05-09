// function merge(intervals: number[][]): number[][] {
//     intervals = intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
//     let mergeIntervals: number[][] = [];

//     for (let i = 0; i < intervals.length; i++) {
//         if (mergeIntervals.length === 0 || mergeIntervals[mergeIntervals.length - 1][1] < intervals[i][0]) {
//             // 没有重叠，直接添加
//             mergeIntervals.push(intervals[i]);
//         } else {
//             // 存在重叠，合并区间
//             mergeIntervals[mergeIntervals.length - 1][1] = Math.max(mergeIntervals[mergeIntervals.length - 1][1], intervals[i][1]);
//         }
//     }

//     return mergeIntervals;
// }

// function merge(intervals: number[][]): number[][] {
//     intervals = intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
//     let mergeIntervals: number[][] = [];
//     for(let i = 0;i<intervals.length;i++){
//         if(mergeIntervals.length === 0 || mergeIntervals[mergeIntervals.length-1][1] <intervals[i][0] ){
//             mergeIntervals.push([intervals[i][0],intervals[i][1]]);
//         }else{
//             mergeIntervals[mergeIntervals.length-1][1] = Math.max(mergeIntervals[mergeIntervals.length-1][1],intervals[i][1]);
//         }
//     }

//     return mergeIntervals;
// }
/**
 * 
 * @param intervals [[1,3],[2,6],[8,10],[15,18]]
 * @returns [[1,6],[8,10],[15,18]]
 */
function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
    const res: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        //初始为0 直接加，不相交，直接加
        if (res.length === 0 || res[res.length - 1][1] < intervals[i][0]) {
            res.push(intervals[i]);
        } else {
            res[res.length - 1][1] = Math.max(
                res[res.length - 1][1],
                intervals[i][1]
            );
        }
    }
    return res;
}

// console.log(merge([[1, 3], [2, 6], [15, 18], [8, 10]]));
// console.log(merge([[1, 4], [2, 3]]));
console.log(
    merge([
        [1, 4],
        [0, 2],
        [3, 5],
    ])
);
