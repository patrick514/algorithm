function isSubsequence(s: string, t: string): boolean {
    let flag = true

    let i = 0,j = 0
    while(i<s.length && j<t.length){
        if(s[i] === t[j]){
            i++
            j++
        }else{
            j++
        }
    }
    return i===s.length

};
console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence('acb', 'ahbgdc'))
console.log(isSubsequence('abc', 'ahbgdc'))

console.log(isSubsequence('', 'ahbgdc'))
