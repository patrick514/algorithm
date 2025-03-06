function addBinary(a: string, b: string): string {
    let x = a.length - 1
    let y = b.length - 1
    let ans: string = ''
   
    let carry = 0
    while (x >= 0 || y >= 0) {
        let sum = carry
        sum += x >= 0 ? parseInt(a[x]) : 0
        sum += y >= 0 ? parseInt(b[y]) : 0
        ans += sum%2
        carry = Math.floor(sum/2)
        x--
        y--
    }
    if(carry >= 1){
        ans+=carry
    }

    return ans.split('').reverse().join('')
};
console.log(addBinary('11','1'))