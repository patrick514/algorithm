// 方法一：使用递归
/**
 * 使用递归将嵌套数组拍平成一维数组。
 *
 * @param arr - 输入的数组，可能包含任意层级的嵌套数组结构。
 * @returns 一个新的扁平化数组，其中包含输入数组中所有非数组元素。
 */
function flattenArrayRecursive(arr: any[]): any[] {
  let result: any[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // 如果元素是数组，递归调用 flattenArrayRecursive
      result = result.concat(flattenArrayRecursive(item));
    } else {
      // 如果元素不是数组，直接添加到结果数组中
      result.push(item);
    }
  });
  return result;
}

// 方法二：使用 reduce 和递归
/**
 * 使用 reduce 和递归将嵌套数组拍平成一维数组。
 *
 * @param arr - 输入的数组，可能包含任意层级的嵌套数组结构。
 * @returns 一个新的扁平化数组，其中包含输入数组中所有非数组元素。
 */
function flattenArrayReduce(arr: any[]): any[] {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      // 如果元素是数组，递归调用 flattenArrayReduce 并连接结果
      acc = acc.concat(flattenArrayReduce(item));
    } else {
      // 如果元素不是数组，直接添加到累积数组中
      acc.push(item);
    }
    return acc;
  }, []);
}

// 方法三：使用栈迭代
/**
 * 将嵌套数组拍平成一维数组。
 *
 * 此函数采用栈数据结构对输入的数组进行非递归遍历，以便处理任意深度的嵌套数组。算法逻辑如下：
 * 1. 复制传入的数组作为初始栈，用于后续的处理。
 * 2. 循环处理栈中的元素，每次从栈中弹出一个元素。
 * 3. 如果弹出的元素是数组，则将其所有元素推入栈中，继续展平；
 * 4. 如果弹出的元素不是数组，则直接放入结果数组中。
 * 5. 为了保留原始数组中的元素顺序，最终对结果进行反转并返回。
 *
 * @param arr - 输入的数组，可能包含任意层级的嵌套数组结构。
 * @returns 一个新的扁平化数组，其中包含输入数组中所有非数组元素，且保留其原始顺序。
 */
function flattenArrayStack(arr: any[]): any[] {
  const stack = [...arr]; // 复制输入数组作为初始栈
  const result: any[] = [];
  while (stack.length) {
    const next = stack.pop(); // 从栈中弹出一个元素
    if (Array.isArray(next)) {
      // 如果元素是数组，将其所有元素推入栈中
      stack.push(...next);
    } else {
      // 如果元素不是数组，直接放入结果数组中
      result.push(next);
    }
  }
  return result.reverse(); // 反转结果数组以保留原始顺序
}

// 方法四：使用 flat 方法
/**
 * 使用数组的 flat 方法将嵌套数组拍平成一维数组。
 *
 * @param arr - 输入的数组，可能包含任意层级的嵌套数组结构。
 * @returns 一个新的扁平化数组，其中包含输入数组中所有非数组元素。
 */
function flattenArrayFlat(arr: any[]): any[] {
  return arr.flat(Infinity); // 使用 flat 方法展开任意深度的嵌套数组
}

// 示例使用
const array = [1, [2, [3, 4], 5], 6];
console.log(flattenArrayRecursive(array)); // 输出: [1, 2, 3, 4, 5, 6]
console.log(flattenArrayReduce(array)); // 输出: [1, 2, 3, 4, 5, 6]
console.log(flattenArrayStack(array)); // 输出: [1, 2, 3, 4, 5, 6]
console.log(flattenArrayFlat(array)); // 输出: [1, 2, 3, 4, 5, 6]
