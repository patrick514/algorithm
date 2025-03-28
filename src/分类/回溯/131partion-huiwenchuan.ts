function partition(s: string): string[][] {
  let res: string[][] = [];
  let path: string[] = [];

  const isHuiwen = (
    str: string,
    startIndex: number,
    endIndex: number
  ): boolean => {
    for (; startIndex < endIndex; startIndex++, endIndex--) {
      if (str[startIndex] !== str[endIndex]) {
        return false;
      }
    }
    return true;
  };
  const dfs = (s: string, startIndex: number) => {
    if (startIndex >= s.length) {
      res.push(path.slice(0));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      if (isHuiwen(s, startIndex, i)) {
        path.push(s.substring(startIndex, i + 1));
      } else {
        continue;
      }
      dfs(s, i + 1);
      path.pop();
    }
  };

  dfs(s, 0);
  return res;
}

// function partition(s: string): string[][] {
//     const res: string[][] = [];
//     const path: string[] = [];

//     // 判断是否为回文串
//     const isHuiwen = (str: string, startIndex: number, endIndex: number): boolean => {
//         for (; startIndex < endIndex; startIndex++, endIndex--) {
//             if (str[startIndex] !== str[endIndex]) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     const dfs = (s: string, startIndex: number) => {
//         // 如果起始位置已经大于等于s的大小，说明已经找到了一组分割方案
//         if (startIndex >= s.length) {
//             res.push([...path]);
//             return;
//         }

//         for (let i = startIndex; i < s.length; i++) {
//             // 如果是回文子串，则记录
//             if (isHuiwen(s, startIndex, i)) {
//                 path.push(s.substring(startIndex, i + 1));
//                 dfs(s, i + 1);  // 寻找i+1为起始位置的子串
//                 path.pop();     // 回溯过程，弹出本次已经填在path的子串
//             }
//         }
//     };

//     dfs(s, 0);
//     return res;
// }



partition("aab");
