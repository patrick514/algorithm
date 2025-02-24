function convert(s: string, numRows: number): string {
    if(numRows < 2){
        return s
    }
    //注意这里 并未为每个元素分配初始值，这会导致在拼接字符时出现 undefined
    let rows:string[]= Array(numRows).fill('')
    let i = 0,flag = -1
    for (const char of s){
        rows[i]+=char
        //到最上 最下时 要改变方向
        if(i === 0 || i === numRows -1){
            flag = -flag
        }
        i+=flag
    }
    let ans =''
    for(let i = 0;i<rows.length;i++){
        ans += rows[i]
    }
    return ans
};
convert("PAYPALISHIRING",4)