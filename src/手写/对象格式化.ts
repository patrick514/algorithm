let obj = {
  a: "1",
  b: {
    c: "2",
    D: {
      E: "3",
    },
  },
};

// 转化为如下：
let obj1 = {
  a: "1",
  b: {
    c: "2",
    d: {
      e: "3",
    },
  },
};

/**
 * 将对象的所有键转换为小写
 *
 * @param obj - 输入的对象，可能包含嵌套的对象或数组
 * @returns 修改后的原对象，其中所有键都转换为小写
 */
function keysLower(obj: any): any {
  // 如果输入不是对象或为 null，直接返回输入
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 如果输入是数组，递归处理数组中的每个元素
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      obj[index] = keysLower(item);
    });
    return obj;
  }

  // 遍历对象的所有键
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 将键名中的大写字母转换为小写字母
      const newKey = key.replace(/[A-Z]/g, (char) => char.toLowerCase());
      // 如果键名发生变化，进行替换
      if (newKey !== key) {
        obj[newKey] = keysLower(obj[key]);
        delete obj[key];
      } else {
        // 递归处理对象的值，确保嵌套对象和数组中的键也被转换
        obj[key] = keysLower(obj[key]);
      }
    }
  }
  return obj;
}

// 调用 keysLower 函数，将 obj 中的所有键转换为小写
keysLower(obj);
console.log(obj); // 输出转换后的对象

let a = 1;
