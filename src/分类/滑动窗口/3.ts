// function lengthOfLongestSubstring(s: string): number {
//     let left = 0;
//     let right = 0;
//     let map = new Map<string, number>(); // 用于存储字符及其最后一次出现的位置  
//     let ans = 0; 

//     while (right < s.length) {
//         // 如果当前字符在map中存在，并且其位置在滑动窗口内，则移动左指针  
//         if (map.has(s[right]) && map.get(s[right])! >= left) {
//             left = map.get(s[right])! + 1;
//         }

//         // 更新字符在map中的位置  
//         map.set(s[right], right);

//         ans = Math.max(ans, right - left + 1);

//         right++;
//     }

//     return ans;
// }

// function lengthOfLongestSubstring(s: string): number {
//     let left = 0
//     let right = 0
//     let ans = 0
//     let map = new Map<string,number>()
//     while(right < s.length){
//         if(map.has(s[right]) && map.get(s[right])! >= left){
//             left  = map.get(s[right])! + 1
//         }

//         map.set(s[right],right)

//         ans  = Math.max(ans,right - left +1)
//         right++
//     }
//     return ans
// }


// function lengthOfLongestSubstring(s: string): number {
//     let left = 0
//     let right = 0
//     let ans = 0
//     let window = new Set()
//     for(right = 0;right<s.length;right++){
//         let c = s[right]

//         while(window.has(c)){
//             //这里是删除左边的重复，而不是right
//             window.delete(s[left])
//             left++
//         }
//         window.add(c)
//         ans = Math.max(ans,right -left + 1)
//     }
//     return ans
// }

function lengthOfLongestSubstring(s: string): number {
    let ans:number = 0;
    const window = new Set();
    let left = 0;
    let right = 0;
    while(right< s.length){
        let c = s[right];
        while(window.has(c)){
            window.delete(s[left]);
            left++;
        }
        window.add(c);
        
        ans = Math.max(ans,right - left + 1);
        right++;
    }
    return ans
}

lengthOfLongestSubstring("pwwkew")