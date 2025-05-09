function decodeString(s: string): string {
   
    const numStack: number[] = [];
    const strStack: string[] = [];

    let num = 0;
  
    let res = "";

    // 遍历输入字符串 s
    for (let char of s) {
        // 判断当前字符是否是数字
        if (!isNaN(parseInt(char))) {
            // 如果是数字，则累积到 num 中，处理多位数的情况
            // 例如，如果连续遇到 '1' 和 '2'，则 num 会从 0 -> 1 -> 12
            num = num * 10 + parseInt(char);
    
        } else if (char === "[") {
            numStack.push(num);
            // 将当前的结果 res 压入 strStack，保存之前的状态
            strStack.push(res);
            // 重置 num 和 res，为解析字符做准备
            num = 0;
            res = "";
        } else if (char === "]") {
            // 如果遇到 ']'，表示一个编码块结束
            // 从 numStack 中弹出一个数字，表示重复次数
            const repeatTimes = numStack.pop()!;
            // 从 strStack 中弹出一个字符串，表示之前的解码结果
            const prevStr = strStack.pop()!;
            // 将当前解码结果 res 重复 repeatTimes 次，并拼接到 prevStr 后面
            
            res = prevStr + res.repeat(repeatTimes);
        } else {
            // 如果是字母，则直接添加到当前解码结果 res 中
            res += char;
        }
    }

    // 遍历结束后，res 中存储的就是最终的解码结果
    return res;
}

// 测试用例
// console.log(decodeString("3[a]2[bc]")); // 输出：aaabcbc
// console.log(decodeString("3[a2[c]]")); // 输出：accaccacc
// console.log(decodeString("2[abc]3[cd]ef")); // 输出：abcabccdcdcdef
console.log(decodeString("abc3[cd]xyz")); // 输出：abccdcdcdxyz
console.log(decodeString("10[leetcode]")); // 输出：leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode