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
  const dp: number[] = Array(n + 1).fill(0);

  const dfs = (i: number): number => {
    if (i === 1) return 1;
    if (i === 2) return 2;

    if (dp[i] !== 0) return dp[i];

    dp[i] = dfs(i - 1) + dfs(i - 2);

    return dp[i];
  };
  return dfs(n);
}
console.log(climbStairs(3));
