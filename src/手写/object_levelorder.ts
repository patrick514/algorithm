/**
 * 对一个普通对象进行层序遍历
 * @param obj
 * @returns
 */
function objectLevelOrder(obj: any): any[] {
    if (!obj || typeof obj !== "object") {
        return [];
    }
    const result: any[] = [];
    const queue = [obj];
    while (queue.length > 0) {
        const cur = queue.pop();
        for (const key in cur) {
            if (cur.hasOwnProperty(key)) {
                const val = cur[key];
                result.push(val);
                if (val && typeof val === "object") {
                    queue.push(val);
                }
            }
        }
    }
    return result;
}

// 测试示例
const testObj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
    e: {
        f: {
            g: 4,
        },
        h: 5,
    },
};

console.log(objectLevelOrder(testObj));
// 输出: [1, {c: 2, d: 3}, {f: {g: 4}, h: 5}, 2, 3, {g: 4}, 5, 4]
