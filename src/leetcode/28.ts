function strStr(haystack: string, needle: string): number {

    
    
   for(let i = 0;i<haystack.length-needle.length+1;i++){
    let match = true
    for(let j = 0;j<needle.length;j++){
        if(haystack[i+j] != needle[j]){
            match = false
            break
        }
    }
    if(match){
        return i
    }

   }
   return -1
};

console.log(strStr('a','a'))
console.log(strStr('leetcode','leeto'))
console.log(strStr('hello','ll'))
///leetcode
   
///leeto
 //j