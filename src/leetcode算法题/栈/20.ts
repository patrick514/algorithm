function isValid(s: string): boolean {
  let stack: string[] = [];
  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      //不能直接用pop 会pop两次
      if (c === ")" && stack[stack.length - 1] !== "(") {
        return false;
      }
      if (c === "}" && stack[stack.length - 1] !== "{") {
        return false;
      }
      if (c === "]" && stack[stack.length - 1] !== "[") {
        return false;
      }
      stack.pop();
    }
  }
  //注意判断 是栈为空
  return stack.length === 0;
}

console.log(isValid("("));
