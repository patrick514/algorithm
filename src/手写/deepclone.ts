// //手写深拷贝
// function deepClone(obj:any, hash = new WeakMap()) {
//   if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//   // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
//   if (typeof obj !== "object") return obj;
//   // 是对象的话就要进行深拷贝
//   // 如果 obj 已经存在于 hash 中，说明出现了循环引用，直接返回 hash 中存储的对象。
//   if (hash.get(obj)) return hash.get(obj);
//   //新建对象
//   let cloneObj = new obj.constructor();
//   // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
//   hash.set(obj, cloneObj);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // 实现一个递归拷贝
//       cloneObj[key] = deepClone(obj[key], hash);
//     }
//   }
//   return cloneObj;
// }

function deepClone(obj: any, hash = new WeakMap()) {
  if (obj === null || obj === undefined) {
    return obj;
  }
  //Date 和 RegExp 对象不能通过简单的属性遍历来复制
  // 它们包含内部状态和特殊的行为
  // 直接使用 Object.assign 或展开运算符会导致不正确的复制
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  //不是object 原始类型不需要深拷贝
  if (typeof obj !== "object") {
    return obj;
  }
  //出现循环引用，
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  //保留了对象的原始类型信息
  // 可以正确处理数组、日期等特殊对象类型
  // 支持自定义类的深拷贝
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

// 示例使用
const original = {
  a: 1,
  b: [2, 3, { d: 4 }],
  c: { e: 5, f: [6, 7], g: {} },
};

// 创建循环引用
original.c.g = original;

const copied = deepClone(original);

console.log(copied); // 输出深拷贝后的对象
console.log(copied === original); // false，确保是不同的对象
console.log(copied.b === original.b); // false，确保数组也是不同的
console.log(copied.c === original.c); // false，确保嵌套对象也是不同的
console.log(copied.c.g === copied); // true，确保循环引用被正确处理
console.log(null == undefined);
