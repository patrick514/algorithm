// 1.找起点：遍历网格找到和单词首字母匹配的位置作为起点
// 2.四个方向：从起点开始，向上下左右四个方向探索
// 3.标记访问：使用一个访问数组记录已访问的位置，防止重复使用
// 4.回溯：如果当前路径不通，回溯到上一个位置继续尝试其他方向
// 一个一个字母的找  找不到就回溯到上一个
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const cnt = new Map();
  for (const row of board) {
    for (const c of row) {
      cnt.set(c, (cnt.get(c) ?? 0) + 1);
    }
  }

  // 优化一
  const wordCnt = new Map();
  for (const c of word) {
    wordCnt.set(c, (wordCnt.get(c) ?? 0) + 1);
    if (wordCnt.get(c) > (cnt.get(c) ?? 0)) {
      return false;
    }
  }

  //优化 如果 word=abcd 但 board 中的 a 很多，d 很少（比如只有一个），那么从 d 开始搜索，能更快地找到答案。
  // 优化二
  if ((cnt.get(word[word.length - 1]) ?? 0) < (cnt.get(word[0]) ?? 0)) {
    word = word.split("").reverse().join("");
  }

  // 定义四个方向：上、右、下、左
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  //index  当前搜索到的第index个字母
  const dfs = (row: number, col: number, index: number) => {
    if (index === word.length) {
      return true;
    }
    //注意别写错了 只要数组越界 已经访问过 字母不等 就返回
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      board[row][col] !== word[index]
    ) {
      return false;
    }
    //** 设为已访问
    visited[row][col] = true;

    for (const [x, y] of directions) {
      const newRow = row + x;
      const newCol = col + y;
      //** 遍历上下左右
      if (dfs(newRow, newCol, index + 1)) {
        return true;
      }
    }

    visited[row][col] = false;
    //**当代码执行到这里时，说明已经尝试了当前位置的所有四个方向
    // 都没有找到一条有效路径（否则在循环中就已经返回 true 了）
    // 因此需要返回 false 表示当前路径不通，让程序回溯到上一层继续尝试其他路径
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);

// var exist = function(board, word) {
//     const cnt = new Map();
//     for (const row of board) {
//         for (const c of row) {
//             cnt.set(c, (cnt.get(c) ?? 0) + 1);
//         }
//     }

//     // 优化一
//     const wordCnt = new Map();
//     for (const c of word) {
//         wordCnt.set(c, (wordCnt.get(c) ?? 0) + 1);
//         if (wordCnt.get(c) > (cnt.get(c) ?? 0)) {
//             return false;
//         }
//     }

//     // 优化二
//     if ((cnt.get(word[word.length - 1]) ?? 0) < (cnt.get(word[0]) ?? 0)) {
//         word = word.split('').reverse();
//     }

//     const m = board.length, n = board[0].length;
//     function dfs(i, j, k) {
//         if (board[i][j] !== word[k]) {
//             return false; // 匹配失败
//         }
//         if (k + 1 === word.length) {
//             return true; // 匹配成功！
//         }
//         board[i][j] = 0; // 标记访问过
//         for (const [x, y] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) { // 相邻格子
//             if (0 <= x && x < m && 0 <= y && y < n && dfs(x, y, k + 1)) {
//                 return true; // 搜到了！
//             }
//         }
//         board[i][j] = word[k]; // 恢复现场
//         return false; // 没搜到
//     }
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (dfs(i, j, 0)) {
//                 return true; // 搜到了！
//             }
//         }
//     }
//     return false; // 没搜到
// };
