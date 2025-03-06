/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  // let i, j
  // let row_len = matrix.length
  // let col_len = matrix[0].length
  // let row_haszeros = new Array(row_len).fill(0)
  // let column_haszeros = new Array(col_len).fill(0)

  // for (i = 0; i < row_len; i++) {
  //     for(j = 0;j<col_len;j++){
  //         if(matrix[i][j] === 0){
  //             row_haszeros[i] = 1
  //             column_haszeros[j]  = 1
  //         }
  //     }
  // }
  // for(i = 0;i<row_len;i++){
  //     if(row_haszeros[i] === 1){
  //         for(let k = 0;k<col_len;k++){
  //             matrix[i][k] = 0
  //         }
  //     }

  // }
  // for(i = 0;i<col_len;i++){
  //     if (column_haszeros[i] === 1) {
  //         for (let k = 0; k < row_len; k++) {
  //             matrix[k][i] = 0
  //         }
  //     }
  // }
  let i, j;
  let col_len = matrix[0].length;
  let row_len = matrix.length;
  let column_haszeros = new Array(col_len).fill(0);
  let row_haszeros = new Array(row_len).fill(0);
  for (i = 0; i < row_len; i++) {
    for (j = 0; j < col_len; j++) {
      if (matrix[i][j] === 0) {
        column_haszeros[j] = 1;
        row_haszeros[i] = 1;
      }
    }
  }
//注意：这里是collen，而是zero的len
  for (i = 0; i < col_len; i++) {
    if (column_haszeros[i] === 1) {
      for (j = 0; j < row_len; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  for (i = 0; i < row_len; i++) {
    if (row_haszeros[i] === 1) {
      for (j = 0; j < col_len; j++) {
        matrix[i][j] = 0;
      }
    }
  }

//   console;
}

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
