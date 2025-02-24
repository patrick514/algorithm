/**
 * 1 2
 * 3 4
 * 
 * 1 3
 * 2 4
 * 
 * 
 * 先根据对角线进行镜像交换
 * 在每一行首尾交换
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let i,j
    let len = matrix.length
    for(i = 0;i<len;i++){
        for(j = i;j<len;j++){
            //对角线只会跟自己交换
            let t  = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = t
        }
    }

    let left,right
    
    for( i =0;i<len;i++){
        left = 0
        right = len -1
        while(left < right){
            let t = matrix[i][left]
            matrix[i][left] = matrix[i][right]
            matrix[i][right] = t
            left++
            right--
        }
    }

};

rotate([[1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]])

// rotate([[1, 2],
// [3,4]])