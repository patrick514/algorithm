/**
 * 1 2
 * 3 4
 *
 * 1 3
 * 2 4
 *
 *
 * 先根据对角线进行镜像交换  选择九十度
 * 在每一行首尾交换
 */
function rotate(matrix: number[][]): void {
    let i, j;
    let len = matrix.length;
    for (i = 0; i < len; i++) {
        for (j = i; j < len; j++) {
            //对角线只会跟自己交换
            let t = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = t;
        }
    }

    let left, right;

    for (i = 0; i < len; i++) {
        left = 0;
        right = len - 1;
        while (left < right) {
            let t = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = t;
            left++;
            right--;
        }
    }
}

/**
 * 使用辅助数组
 * 0,0 0,1 0,2
 * 1,0 1,1 1,2
 * 2,0 2,1 2,2
 * 第一行的第 x 个元素在旋转后恰好是倒数第一列的第 x 个元素。
 */
function rotate(matrix: number[][]): void {
    //   const matrix1: number[][] = [];
    let n = matrix[0].length;
    const matrix1 = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix1[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix1[i][j];
        }
    }

    //   console.log(matrix1);
}

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

// rotate([[1, 2],
// [3,4]])
