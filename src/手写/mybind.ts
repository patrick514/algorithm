Function.prototype.myBind = function (context: any, ...args: any[]) {
    // 保存 this，指向原函数
    const fn = this;

    // 返回一个新的函数
    return function (...newArgs: any[]) {
        // 如果作为构造函数调用，则使用 new 调用原函数
        if (this instanceof fn) {
            return new fn(...args, ...newArgs);
        }
        // 否则，使用 apply 调用原函数，并绑定 context
        return fn.apply(context, [...args, ...newArgs]);
    };
};

// 示例使用
function example(a: any, b: any) {
    console.log(this, a, b);
}

const boundExample = example.myBind({ name: 'GitHub Copilot' }, 1);
boundExample(2); // 输出: { name: 'GitHub Copilot' } 1 2