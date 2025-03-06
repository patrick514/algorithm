function intToRoman(num: number): string {

    let values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let reps = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let ans = ''
    for(let i = 0;i<reps.length;i++){
        while(num >= values[i]){
            num -= values[i]
            ans += reps[i]
        }   
    }
    return ans
};

intToRoman(3749)