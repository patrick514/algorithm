function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        // 提取最低位
        let bit = n & 1;
        // 将 result 左移一位并添加当前提取的位
        result = (result << 1) | bit;
        // 将 n 右移一位以准备提取下一位
        n >>>= 1;
    }

    return result >>> 0;  // 确保返回无符号整数  无符号右移
}

console.log(reverseBits(0o00000010100101000001111010011100))