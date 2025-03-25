function combinationSum(candidates: number[], target: number): number[][] {
  let path: number[] = [];
  let res: number[][] = [];

  const dfs = (
    candidates: number[],
    target: number,
    curSum: number,
    path: number[],
    startIndex:number
  ) => {
    if (curSum > target) {
      return;
    }
    if (curSum === target) {
      res.push(path.slice(0));
    }

    for (let i = startIndex;i<candidates.length;i++) {
      const c = candidates[i]
      path.push(c);
      dfs(candidates, target, curSum + c, path,i);
      path.pop();
    }
  };
  dfs(candidates, target, 0, path,0);

  return res;
}

console.log(combinationSum([2, 3, 6, 7],7));
