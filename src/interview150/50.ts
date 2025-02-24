function myPow(x: number, n: number): number {
    let ans =1

    if(n<0){
        n = -n
        x = 1/x
    }
    while(n){
        if(n%2){
            ans *= x
        }
        //当前二进制位的幂  第一位为1 二位为2 4 8
        x *= x
        n = Math.floor(n /2)
    }

    return ans
};

console.log(myPow(2,-1))