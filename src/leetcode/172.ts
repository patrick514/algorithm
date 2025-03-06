function trailingZeroes(n: number): number {
    let cnt = 0

    //判断2*5的个数
    //2肯定比5多 数5的个数
    while (n >= 5) {
        cnt += Math.floor(n/5)
        n /= 5
    }
    return cnt
};

console.log(trailingZeroes(10))