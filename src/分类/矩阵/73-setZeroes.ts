/**
 * 记录哪些列和行要变成0 用的两个数组O(m + n)
 * @param matrix
 */
// function setZeroes(matrix: number[][]): void {

//   let i, j;
//   let col_len = matrix[0].length;
//   let row_len = matrix.length;
//   let column_haszeros = new Array(col_len).fill(0);
//   let row_haszeros = new Array(row_len).fill(0);
//   for (i = 0; i < row_len; i++) {
//     for (j = 0; j < col_len; j++) {
//       if (matrix[i][j] === 0) {
//         column_haszeros[j] = 1;
//         row_haszeros[i] = 1;
//       }
//     }
//   }
// //注意：这里是collen，而是zero的len
//   for (i = 0; i < col_len; i++) {
//     if (column_haszeros[i] === 1) {
//       for (j = 0; j < row_len; j++) {
//         matrix[j][i] = 0;
//       }
//     }
//   }

//   for (i = 0; i < row_len; i++) {
//     if (row_haszeros[i] === 1) {
//       for (j = 0; j < col_len; j++) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// }

/**
 * 记录在 第一列和第一行
 * @param matrix
 */
function setZeroes(matrix: number[][]): void {
    let _row = false;
    let _col = false;
    let row = matrix.length;
    let col = matrix[0].length;

    //第一行有没有0
    for (let i = 0; i < col; i++) {
        if (matrix[0][i] === 0) {
            _row = true;
        }
    }
    //第一列有没有0
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            _col = true;
        }
    }

    //把第一行和第一列作为记录 然后再根据_row _col进行第一行第一列的计算
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (_row) {
        for (let i = 0; i < col; i++) {
            matrix[0][i] = 0;
        }
    }

    if (_col) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
    // console.log(matrix)
}

setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
]);
