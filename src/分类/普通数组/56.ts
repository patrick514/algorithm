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


function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((inter1, inter2) => inter1[0] - inter2[0]);
    let mergeIntervals: number[][] = [];
    for(let i = 0;i<intervals.length;i++){
        if(mergeIntervals.length === 0 || mergeIntervals[mergeIntervals.length-1][1] <intervals[i][0] ){
            mergeIntervals.push([intervals[i][0],intervals[i][1]]);
        }else{
            mergeIntervals[mergeIntervals.length-1][1] = Math.max(mergeIntervals[mergeIntervals.length-1][1],intervals[i][1]);
        }
    }
    

    return mergeIntervals;
}
// console.log(merge([[1, 3], [2, 6], [15, 18], [8, 10]]));
// console.log(merge([[1, 4], [2, 3]]));
console.log(merge([[1, 4], [0, 2], [3, 5]]));

