function permute(nums: number[]): number[][] {
  let res: number[][] = [];
  let path: number[] = [];
  let used: boolean[] = [];
  used.fill(false);
  const dfs = (nums: number[], used: boolean[]) => {
    if (path.length === nums.length) {
      res.push(path.slice(0));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs(nums, used);
      path.pop();
      used[i] = false;
    }
  };

  dfs(nums, used);
  return res;
}

permute([1, 2, 3]);
