// function findAnagrams(s: string, p: string): number[] {
//     const cnt_p = new Array(26).fill(0);//记录子串出现个数
//     const window = new Array(26).fill(0);

//     let res: number[] = [];

//     for (let i = 0; i < p.length; i++) {
//         cnt_p[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }

//     for (let right = 0; right < s.length; right++) {
//         window[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;

//         let left = right - p.length + 1;
//         if (left < 0) {
//             continue;
//         }
//         let isEqual = true;
//         for(let j = 0;j<cnt_p.length;j++){
//             if(window[j] !== cnt_p[j]){
//                 isEqual = false;
//             }
//         }

//         if(isEqual){
//             res.push(left);
//         }
//         window[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
//     }
//     return res;
// };


/**定长 滑窗
 *  入：下标为 i 的元素进入窗口，更新相关统计量。如果 i<k−1 则重复第一步。
    更新：更新答案。一般是更新最大值/最小值。
    出：下标为 i−k+1 的元素离开窗口，更新相关统计量。
 * @param s 
 * @param p 
 * @returns 
 */
function findAnagrams(s: string, p: string): number[] {
    const ans: number[] = [];
    const cnt_p = new Array(26).fill(0);
    const cnt_s = new Array(26).fill(0);

    for (const c of p) {
        cnt_p[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let right = 0; right < s.length; right++) {
        cnt_s[s[right].charCodeAt(0) - "a".charCodeAt(0)]++;
        //right - left + 1 === p.length 保证 长度是固定的
        let left = right - p.length + 1;
        if (left < 0) {
            continue;
        }

        if (cnt_s.every((value, index) => value === cnt_p[index])) {
            ans.push(left);
        }
        //不要忘记 左端点离开
        cnt_s[s[left].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    return ans;
}

/**不定长 滑窗
 * 找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引
 * @param s
 * @param p
 * @returns
 */
// function findAnagrams(s: string, p: string): number[] {
//     let cnt = new Array(26).fill(0);
//     //s和p共用一个cnt p的个数为+  s的个数为-
//     for (const pstr of p) {
//         cnt[pstr.charCodeAt(0) - "a".charCodeAt(0)]++;
//     }
//     let ans: number[] = [];
//     let left = 0;
//     for (let right = 0; right < s.length; right++) {
//         let c = s[right].charCodeAt(0) - "a".charCodeAt(0);
//         cnt[c]--;//右端点进入
//         while (cnt[c] < 0) {
//           //c多了，要从左边开始删
//             cnt[s[left].charCodeAt(0) - "a".charCodeAt(0)]++;
//             left++;
//         }
//         //子串与p的长度相同 是结果
//         if (right - left + 1 === p.length) {
//             ans.push(left);
//         }
//     }

//     return ans;
// }

findAnagrams("cbaebabacd", "abc");
