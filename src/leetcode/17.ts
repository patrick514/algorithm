const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
function letterCombinations(digits: string): string[] {
    let n = digits.length;
    if(n === 0){
        return [];
    }
    let path:string[] = [];
    let ans:string[] = [];
   
    const dfs = (i:number)=>{
        if(i === n){
            ans.push(path.join(''))
            return;
        }

        const chars  = mapping[parseInt(digits[i])];
        for(const c of chars){
            path[i] = c;
            dfs(i + 1);

        }
    }
    dfs(0);
    return ans;
};

letterCombinations('23')

// function letterCombinations(digits: string): string[] {
//     let n = digits.length;
//     if(n === 0){
//         return [];
//     }
//     let path:string[] = []
//     let ans:string[]  =[]
//     const dfs = (i:number) =>{
//         if(i === n){

//         }
//     }
// };