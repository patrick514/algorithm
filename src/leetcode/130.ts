function solve(board: string[][]): void {

    let row = board.length
    let col = board[0].length
    if (row === 0 || col === 0) {
        return
    }
    //遍历周围与边界o相连的 o
    function dfs(i: number, j: number) {
        if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== 'O') {
            return
        }
        board[i][j] = 'E'
        dfs(i + 1, j)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i, j - 1)
    }
    //从上下左右四个边界 开始
    // top
    for (let i = 0; i < row; i++) {
        if (board[0][i] === 'O') {
            dfs(0, i)
        }
    }
    //bottom
    for (let i = 0; i < col; i++) {
        if (board[row - 1][i] === 'O') {
            dfs(row - 1, i)
        }
    }
    //left
    for (let i = 0; i < row; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0)
        }
    }
    //right
    for (let i = 0; i < row; i++) {
        if (board[i][col - 1] === 'O') {
            dfs(i, col-1)
        }
    }
    // 被包围的 o 换成 x
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    // 把标记 的 e 换回  o
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'E') {
                board[i][j] = 'O'
            }
        }
    }


};



console.log(solve([["X", "O", "X"], 
                   ["O", "X", "O"], 
                   ["X", "O", "X"]]))