function isPalindrome(x: number): boolean {
    let s = x.toString()
    let i = 0,j = s.length-1
    for(i = 0;i<s.length/2;i++){
        if(s[i] !== s[j]){
            return false
        }
        j--
    }
    return true
};

console.log(isPalindrome(121))