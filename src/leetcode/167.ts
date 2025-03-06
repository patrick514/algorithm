function twoSum(numbers: number[], target: number): number[] {
    let i = 0,j = numbers.length-1
    while(i<j){
        if(numbers[i] + numbers[j] < target){
            i++
        }
        else if(numbers[i] + numbers[j] > target){
            j--
        }
        else if(numbers[i] + numbers[j] === target){
            break
        }
    }
    return [i+1,j+1]
};

console.log(twoSum([2, 7, 11, 15],9))
console.log(twoSum([2, 3, 4], 6))

