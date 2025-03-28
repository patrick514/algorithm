//子集
function subsets(nums: number[]): number[][] {
  let res: number[][] = [];
  let path: number[] = [];

  const dfs = (nums: number[], startIndex: number) => {
    res.push(path.slice(0));
    //可写可不写
    if (startIndex >= nums.length) {
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(nums, i + 1);
      path.pop();
    }
  };

  dfs(nums, 0);
  return res;
}
subsets([1, 2, 3]);
