/**
 * 
 * @param s 
 * @param t 
 * @returns 
 */
function minWindow(s: string, t: string): string {
    let need = new Map();
    let window = new Map();

    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    // 定义左右指针，valid 记录窗口中满足条件的字符数量，start 和 len 用于记录最小覆盖子串的起始位置和长度
    let left = 0;
    let right = 0;
    let valid = 0;
    let len = Infinity;
    let start = 0;

    while (right < s.length) {
        const c = s[right];
        right++;
        //判断目前窗口覆盖的子串的字符个数 更新窗口
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        //只要覆盖 的字符个数相等，一直缩小窗口
        while (need.size === valid) {
            if (right - left < len) {
                len = right - left;
                start = left;
            }
            const d = s[left];
            left++;
            //如果d是要求的字符，更新窗口
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, (window.get(d) || 0) - 1);
            }
        }
    }

    return len === Infinity ? "" : s.substring(start, start + len);
};

minWindow("ADOBECODEBANC", "ABC")



// function minWindow(s: string, t: string): string {
//     // 创建两个哈希表，need 用于记录 t 中字符的需求数量，window 用于记录当前窗口中字符的数量
//     const need = new Map<string, number>();
//     const window = new Map<string, number>();

//     // 初始化 need 哈希表
//     for (const c of t) {
//         need.set(c, (need.get(c) || 0) + 1);
//     }

//     // 定义左右指针，valid 记录窗口中满足条件的字符数量，start 和 len 用于记录最小覆盖子串的起始位置和长度
//     let left = 0, right = 0;
//     let valid = 0;
//     let start = 0, len = Infinity;

//     // 开始滑动窗口
//     while (right < s.length) {
//         // c 是将移入窗口的字符
//         const c = s[right];
//         // 右移窗口
//         right++;
//         // 如果 c 是 t 中需要的字符，则更新窗口数据
//         if (need.has(c)) {
//             window.set(c, (window.get(c) || 0) + 1);
//             // 如果窗口中的该字符数量满足了需求，则 valid 加 1
//             if (window.get(c) === need.get(c)) {
//                 valid++;
//             }
//         }

//         // 判断左侧窗口是否要收缩
//         while (valid === need.size) {
//             // 更新最小覆盖子串
//             if (right - left < len) {
//                 start = left;
//                 len = right - left;
//             }
//             // d 是将移出窗口的字符
//             const d = s[left];
//             // 左移窗口
//             left++;
//             // 如果 d 是 t 中需要的字符，则更新窗口数据
//             if (need.has(d)) {
//                 if (window.get(d) === need.get(d)) {
//                     valid--;
//                 }
//                 window.set(d, (window.get(d) || 0) - 1);
//             }
//         }
//     }

//     // 返回最小覆盖子串
//     return len === Infinity ? "" : s.substring(start, start + len);
// }
