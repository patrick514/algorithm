/**
 * 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数
 * @param s
 * @param k
 */
function maxVowels(s: string, k: number): number {
    let ans = 0;
    let vowel = 0;
    for (let i = 0; i < s.length; i++) {
        //进入窗口
        if (
            s[i] === "a" ||
            s[i] === "e" ||
            s[i] === "i" ||
            s[i] === "o" ||
            s[i] === "u"
        ) {
            vowel++;
        }
        //目前遍历的长度要1大于等于k
        if (i  < k -1) {
            continue;
        }

        ans = Math.max(ans, vowel);
        //离开窗口
        let out = s[i - k + 1];
        if (
            out === "a" ||
            out === "e" ||
            out === "i" ||
            out === "o" ||
            out === "u"
        ) {
            vowel--;
        }
    }
    return ans;
}

maxVowels("abciiidef",3);
