// function spiralOrder(matrix: number[][]): number[] {
//     let left = 0
//     let top = 0
//     let right = matrix[0].length - 1
//     let bottom = matrix.length - 1
//     let ans: number[] = []
//     while (top <= bottom && left <= right) {

//         for (let i = left; i <= right; i++) {
//             ans.push(matrix[top][i])
//         }
//         top++
//         for (let i = top; i <= bottom; i++) {
//             ans.push(matrix[i][right])
//         }
//         right--
//         if (top > bottom || left > right) break;

//         for (let i = right; i >= left; i--) {
//             ans.push(matrix[bottom][i])
//         }
//         bottom--
//         for (let i = bottom; i >= top; i--) {
//             ans.push(matrix[i][left])
//         }
//         left++

//     }

//     // ans.push(matrix[top][top])
//     return ans

// };

/**
 * 上下左右四个边界 每次遍历完一个边界 边界就整个移动一格
 * 直到最后只剩一个元素
 * @param matrix 
 * @returns 
 */
function spiralOrder(matrix: number[][]): number[] {
    let ans: number[] = [];
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        //遍历到最后了，不能继续，会重复 这里要判断一次 下一次while会判断
        if (top > bottom || left > right) break;
        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left]);
        }
        left++;
    }

    return ans;
}

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);
