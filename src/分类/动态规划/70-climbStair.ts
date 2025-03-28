//最暴力的回溯  超时
// function climbStairs(n: number): number {
//     let res:number[][] = []
//     let path:number[] = []
//     const dfs = (sum:number) =>{
//         if(sum === n){
//             res.push(path.slice())
//             return
//         }else if(sum > n){
//             return
//         }
//         path.push(1)
//         dfs(sum+1)
//         path.pop()

//         path.push(2)
//         dfs(sum+2)
//         path.pop()
//     }
//     dfs(0)
//     return res.length
// }

//递归 + 记忆化搜索
function climbStairs(n: number): number {
  
}
console.log(climbStairs(35))
