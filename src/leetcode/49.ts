// function groupAnagrams(strs: string[]): string[][] {
//     const map = new Map<string, string[]>();
//     // let list: string[] = [];
//     for (let str of strs) {
//         // 将字符串转换为字符数组并排序
//         let array = Array.from(str);
//         array.sort();
//         let key = array.toString();

//         // 获取 map 中的值，如果不存在则创建一个新的数组
//         let list = map.get(key)|| [];
//         list.push(str);
//         map.set(key, list);
//     }
//     // console.log(map)
//     // 返回 map 中所有值组成的数组
//     return Array.from(map.values());
// }


// // 测试代码
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // 输出: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// console.log(result);

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (let str of strs) {
        // 将字符串转换为字符数组并排序
        let array = Array.from(str);
        array.sort();
        let key = array.join(''); // 使用 join('') 生成唯一键

        // 获取 map 中的值，如果不存在则创建一个新的数组
        let list = map.get(key) || [];
        list.push(str);
        map.set(key, list);
    }

    // 返回 map 中所有值组成的数组
    return Array.from(map.values());
}

// 测试代码
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// 输出: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
