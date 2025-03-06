// function productExceptSelf(nums: number[]): number[] {
//     let result: number[] = []

//     for (let i = 0; i < nums.length; i++) {
//         const product  = nums.slice(0,i).concat(nums.slice(i+1))
//         result.push(product.reduce((a,b)=>a*b,1) )
//     }
//     return result
// };


function productExceptSelf(nums: number[]): number[] {
    let anwser: number[] = []
    let L: number[] = []
    let R: number[] = []
    L[0] = 1
    for (let i = 1; i < nums.length; i++) {
        L[i] = nums[i-1] * L[i-1]
    }

    R[nums.length-1] = 1
    for(let i = nums.length-2;i >= 0;i--){
        R[i] = nums[i+1] * R[i+1]
    }
    for(let i = 0;i<nums.length;i++){
        anwser.push(L[i] * R[i])
    }
    return anwser
};
console.log(productExceptSelf([-1, 1, 0, -3, 3]))