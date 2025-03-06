function reverseWords(s: string): string {

    let arr = s.split(' ');
    let ans = '';
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] !== ''){
            ans += arr[i] + ' ';
        }
    }
    return ans.trim();
};