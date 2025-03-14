// function numIslands(grid: string[][]): number {
//     let landCnt = 0
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === '1') {
//                 infect(grid, i, j)
//                 landCnt++
//             }
//         }
//     }
//     return landCnt
// };
// // 思路：遍历岛这个二维数组，如果当前数为1，则进入感染函数并将岛个数 + 1
// // 感染函数：其实就是一个递归标注的过程，它会将所有相连的1都标注成2。
// // 为什么要标注？这样就避免了遍历过程中的重复计数的情况，一个岛所有的1都变成了2后，
// // 遍历的时候就不会重复遍历了

// function infect(grid: string[][], i: number, j: number) {
//     //注意两个length 不一样
//     if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1') {
//         return
//     }

//     grid[i][j] = '2'
//     infect(grid, i + 1, j)
//     infect(grid, i, j + 1)
//     infect(grid, i - 1, j)
//     infect(grid, i, j - 1)
// }

// // 思路：遍历岛这个二维数组，如果当前数为1，则进入感染函数并将岛个数 + 1
// // 感染函数：其实就是一个递归标注的过程，它会将所有相连的1都标注成2。
// // 为什么要标注？这样就避免了遍历过程中的重复计数的情况，一个岛所有的1都变成了2后，
// // 遍历的时候就不会重复遍历了
function numIslands(grid: string[][]): number {
  let landCnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        inject(grid, i, j);
        landCnt++;
      }
    }
  }

  return landCnt;
}

function inject(grid: string[][], i: number, j: number) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== "1"
  ) {
    return;
  }
  grid[i][j] = "2";
  inject(grid, i - 1, j);
  inject(grid, i +1, j);

  inject(grid, i , j-1);

  inject(grid, i , j+1);
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
