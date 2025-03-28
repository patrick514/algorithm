function combine(n: number, k: number): number[][] {
    let res:number[][] = []
    let path:number[] = []
    const dfs = (n:number,k:number,startIndex:number) =>{
        if(path.length === k){
            //这里不能直接推入path的引用，后面path变了，res就会变
            res.push(path.slice())
            return
        }
        //startIndex 起始位置 1推入，递归 1后面的数字，比如2,3,4
        for(let i = startIndex;i<=n;i++){
            path.push(i)
            dfs(n,k,i+1)
            //回溯，1,2 弹出2， 1,3
            path.pop()
        }
    }
    dfs(n,k,1)
    return res
}

combine(4,2)
