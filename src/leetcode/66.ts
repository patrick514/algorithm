function plusOne(digits: number[]): number[] {
    for(let i = digits.length-1;i>=0;i--){
        digits[i] += 1
        if(digits[i] >=10){
            digits[i] -=10
            if(i-1<0){
                digits.unshift(1)
            }

        }else{
            return digits
        }
    }
    return digits
};

console.log(plusOne([9]))