// function hammingWeight(n: number): number {
//     let cnt = 0
//     let n1 = n.toString(2)
//     for(let i =0;i<n1.length;i++){
//         if(n1[i] === '1'){
//             cnt++
//         }
//     }
//     return cnt
// };


function hammingWeight(n: number): number {
    let cnt = 0;
    while (n !== 0) {
        n &= (n - 1);  // 清除最低位的 1
        cnt++;
    }
    return cnt;
}


hammingWeight(11)