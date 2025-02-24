function longestCommonPrefix(strs: string[]): string {

    let prefix: string = ''
    let pre: string = strs[0]
    let isp = false
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== pre[i]) {
                isp = false
                // break
            }
            else {
                isp = true
            }
        }
        if (isp)
            prefix += pre[i]
        else
            return prefix
    }

    return prefix

};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(['a']))
console.log(longestCommonPrefix(["cir", "car"]))