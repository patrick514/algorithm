function spiralOrder(matrix: number[][]): number[] {
    let left = 0
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let ans: number[] = []
    while (top <= bottom && left <= right) {
        
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right--
        if (top > bottom || left > right) break; 


        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i])
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left])
        }
        left++

    }

    // ans.push(matrix[top][top])
    return ans

};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))