function isAnagram(s: string, t: string): boolean {
    
    let s2t = new Map<string, number>();
    let t2s = new Map<string, number>();
    let len: number = Math.max(s.length, t.length);
    for (let i = 0; i < len; i++) {
        s2t.set(s[i], (s2t.get(s[i]) || 0) + 1);
        t2s.set(t[i], (t2s.get(t[i]) || 0) + 1);
    }
    if(s2t.size !== t2s.size){
        return false;
    }
    for (let i = 0; i < t2s.size; i++) {
        if (!s2t.has(t[i]) && !t2s.has(s[i])) {
            return false;
        }
        if (s2t.get(t[i]) !== t2s.get(t[i])) {
            return false;
        }
    }
    return true;
};
// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const charCount = new Map<string, number>();

//     for (let i = 0; i < s.length; i++) {
//         charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
//         charCount.set(t[i], (charCount.get(t[i]) || 0) - 1);
//     }

//     for (let count of charCount.values()) {
//         if (count !== 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("a", "ab")); // false

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("a", "ab"))
