// 方法一：使用 Set 原理  hashmap？
function uniqueArraySet(arr: any[]): any[] {
    return [...new Set(arr)];
}

// 方法二：使用 filter 和 indexOf
function uniqueArrayFilter(arr: any[]): any[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 方法三：使用 reduce 
// 方法对数组中的每个元素按序执行一个提供的 reducer 函数，
// 每一次运行 reducer 会将先前元素的计算结果作为参数传入，
// 最后将其结果汇总为单个返回值。
// 和 includes
function uniqueArrayReduce(arr: any[]): any[] {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// 方法四：使用 Map
function uniqueArrayMap(arr: any[]): any[] {
    const map = new Map();
    arr.forEach(item => {
        if (!map.has(item)) {
            map.set(item, true);
        }
    });
    return [...map.keys()];
}

// 示例使用
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueArraySet(array)); // 输出: [1, 2, 3, 4, 5]
console.log(uniqueArrayFilter(array)); // 输出: [1, 2, 3, 4, 5]
console.log(uniqueArrayReduce(array)); // 输出: [1, 2, 3, 4, 5]
console.log(uniqueArrayMap(array)); // 输出: [1, 2, 3, 4, 5]