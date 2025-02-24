function mySqrt(x: number): number {
    let left = 0
    let right = x
    while(left <=right){
        let mid = left + Math.floor((right-left)/2)
        let sum = mid * mid
        if(sum === x){
            return mid
        }
        if(sum < x){
            left = mid +1
        }else{
            right = mid -1
        }
    }
    //为什么是right left=right时，right每次减一
    return right
};

console.log(mySqrt(10))