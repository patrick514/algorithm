function isValidSudoku(board: string[][]): boolean {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(0))
    let column = new Array(9).fill(0).map(() => new Array(9).fill(0))
    let matrix = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
    for(let i =0;i<9;i++){
        for(let j = 0;j<9;j++){
            let c : string =  board[i][j]
            if(board[i][j] !== '.'){
                const index : number  = c.charCodeAt(0) - '0'.charCodeAt(0) - 1
                row[i][index]++
                column[j][index]++
                matrix[Math.floor(i/3)][Math.floor(j/3)][index]++
                if (row[i][index] > 1 || column[j][index] > 1 || matrix[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1){
                    return false
                }
             }
        }
    }

    



    return true
};