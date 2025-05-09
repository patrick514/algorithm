// function generateParenthesis(n: number): string[] {
//   let res: string[] = [];
// //   let path: string = "";

//   const dfs = (path: string) => {
//     if (path.length === 2 * n) {
//       if (isValidBrackt(path)) {
//         res.push(path);
//       }
//       return;
//     }

//     dfs(path + "(");
//     dfs(path + ")");
//   };
//   dfs("");
//   return res;
// }

// function isValidBrackt(s: string): boolean {
//   let stack: string[] = [];
//   for (const c of s) {
//     if (c === "(") {
//       stack.push(c);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }

//       if (stack[stack.length - 1] === "(" && c !== ")") {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// }

function generateParenthesis(n: number): string[] {
  let res: string[] = [];

  const dfs = (path: string, left: number, right: number) => {
    if (left === n && right === n) {
      res.push(path);
      return;
    }

    //代码会不会有）））（（（这种情况出现
    if (left < n) {
      dfs(path + "(", left + 1, right);
    }
    //每次都先遍历左括号的可能性 比如 (  (( ((( 然后再加右括号 比如 ((())) (()) () 如此递归，直到左右都用完
    // 确保右括号数量始终小于左括号数量   
    if (right < left) {
      dfs(path + ")", left, right + 1);
    }
  };
  dfs("", 0, 0);
  return res;
}
generateParenthesis(3);
// isValidBrackt("((()))");
