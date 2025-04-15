// function findAnagrams(s: string, p: string): number[] {
//     const cnt_p = new Array(26).fill(0);//记录子串出现个数
//     const window = new Array(26).fill(0);

//     let res: number[] = [];
    

//     for (let i = 0; i < p.length; i++) {
//         cnt_p[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }

//     for (let right = 0; right < s.length; right++) {
//         window[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;
      
//         let left = right - p.length + 1;
//         if (left < 0) {
//             continue;
//         }
//         let isEqual = true;
//         for(let j = 0;j<cnt_p.length;j++){
//             if(window[j] !== cnt_p[j]){
//                 isEqual = false;
//             }
//         }

//         if(isEqual){
//             res.push(left);
//         }
//         window[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
//     }
//     return res;
// };

//定长 滑窗
function findAnagrams(s: string, p: string): number[] {
    const window = new Set()
    let left = 0
    let right = 0
    for(let i = 0;i<s.length;i++){

    }

};

// //不定长 滑窗
// function findAnagrams(s: string, p: string): number[] {
//     const window = new Set()
//     let left = 0
//     let right = 0
//     for(let i = 0;i<s.length;i++){

//     }

// };

findAnagrams("cbaebabacd", "abc")