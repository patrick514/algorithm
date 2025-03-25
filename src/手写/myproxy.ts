// 定义一个目标对象
const target = {
    message1: "hello",
    message2: "everyone"
};

// 定义一个处理器对象，包含捕获器函数
const handler = {
  // 捕获器函数：拦截属性读取操作
  get: function (target: any, prop: string) {
    if (prop in target) {
      return target[prop];
    } else {
      return `Property ${prop} does not exist.`;
    }
  },
  // 捕获器函数：拦截属性设置操作
  /**
   *
   * @param target 目标对象
   * @param prop 将被设置的属性名或 Symbol。
   * @param value 新值
   * Proxy 或者继承 Proxy 的对象
   * @returns
   */
  set: function (target: any, prop: string, value: any) {
    if (typeof value === "string") {
      target[prop] = value;
      return true;
    } else {
      console.log(`Property ${prop} must be a string.`);
      return false;
    }
  },
  // 捕获器函数：拦截属性删除操作
  deleteProperty: function (target: any, prop: string) {
    if (prop in target) {
      delete target[prop];
      return true;
    } else {
      console.log(`Cannot delete property ${prop} because it does not exist.`);
      return false;
    }
  },
  // 捕获器函数：拦截函数调用操作
  apply: function (target: any, thisArg: any, argumentsList: any[]) {
    return target.apply(thisArg, argumentsList);
  },
};

// 创建一个 Proxy 对象
const proxy = new Proxy(target, handler);

// 示例使用
console.log(proxy.message1); // 输出: hello
console.log(proxy.message3); // 输出: Property message3 does not exist.

proxy.message2 = "world"; // 设置成功
console.log(proxy.message2); // 输出: world

proxy.message2 = 123; // 设置失败，输出: Property message2 must be a string.

delete proxy.message1; // 删除成功
console.log(proxy.message1); // 输出: Property message1 does not exist.

delete proxy.message3; // 删除失败，输出: Cannot delete property message3 because it does not exist.