function dailyTemperatures(temperatures: number[]): number[] {
  // 初始化答案数组，长度与温度数组相同，初始值为0
  let ans: number[] = new Array(temperatures.length).fill(0);
  // 初始化栈，用于存储温度数组的索引
  let stack: number[] = [];

  // 遍历温度数组
  for (let i = 0; i < temperatures.length; i++) {
    // 当栈不为空且当前温度大于栈顶索引对应的温度时
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // 弹出栈顶索引
      let a: number = stack.pop()!;
      // 计算等待天数并存储在答案数组中
      ans[a] = i - a;
    }
    // 将当前索引压入栈中
    stack.push(i);
  }

  return ans;
}

// dailyTemperatures([30,60,90])
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
