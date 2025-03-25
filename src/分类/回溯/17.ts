const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
// function letterCombinations(digits: string): string[] {
//     let n = digits.length;
//     if(n === 0){
//         return [];
//     }
//     let path:string[] = [];
//     let ans:string[] = [];
   
//     const dfs = (i:number)=>{
//         if(i === n){
//             ans.push(path.join(''))
//             return;
//         }

//         const chars  = mapping[parseInt(digits[i])];
//         for(const c of chars){
//             path[i] = c;
//             dfs(i + 1);

//         }
//     }
//     dfs(0);
//     return ans;
// };



// function letterCombinations(digits: string): string[] {
//     let res:string[] = []
//     let path:string[] = []
//     const dfs = (i:number) =>{
//         if(i === digits.length){
//             res.push(path.join(''))
//             return
//         }

//         const char = mapping[parseInt[digits[i]]]
//         for(const c of char){
//             path[i] = c
//             dfs(i + 1)
//         }
//     }
//     dfs(0)
//     return res
// };

function letterCombinations(digits: string): string[] {
    
    if(digits === ""){
        return []
    }
    let res:string[] = []
    let path :string[] = []

    const dfs = (digits:string,curIndex:number,path:string[]) => {
        if(digits.length === curIndex){
            res.push(path.join(''))
            //不要忘记return
            return
        }

        const chars = mapping[parseInt(digits[curIndex])]
        for(const c of chars){
            path.push(c)
            dfs(digits,curIndex+1,path)
            path.pop()
        }
    }
    dfs(digits,0,path)
    return res
};
letterCombinations('23')