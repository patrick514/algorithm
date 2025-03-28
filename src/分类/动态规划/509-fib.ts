//最暴力的方法
// function fib(n: number): number {
//     if(n === 0){
//         return 0
//     }
//     else if(n === 1){
//         return 1
//     }

//     return fib(n -1) + fib(n - 2)
// }

//使用记忆化搜索 + 递归
function fib(n: number): number {
  const dp: number[] = Array(n + 1).fill(-1);

  const dfs = (i: number): number => {
    if (i <= 2) {
      return i;
    }

    if (dp[i] !== -1) {
      return dp[i];
    }

    let ans = dfs(i - 1) + dfs(i - 2);
    dp[i] = ans;
    return ans;
  };

  return dfs(n);
}

console.log(fib(3));
