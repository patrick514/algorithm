// function productExceptSelf(nums: number[]): number[] {
//     let result: number[] = []

//     for (let i = 0; i < nums.length; i++) {
//         const product  = nums.slice(0,i).concat(nums.slice(i+1))
//         result.push(product.reduce((a,b)=>a*b,1) )
//     }
//     return result
// };

// function productExceptSelf(nums: number[]): number[] {
//     let anwser: number[] = []
//     let L: number[] = []
//     let R: number[] = []
//     L[0] = 1
//     for (let i = 1; i < nums.length; i++) {
//         L[i] = nums[i-1] * L[i-1]
//     }

//     R[nums.length-1] = 1
//     for(let i = nums.length-2;i >= 0;i--){
//         R[i] = nums[i+1] * R[i+1]
//     }
//     for(let i = 0;i<nums.length;i++){
//         anwser.push(L[i] * R[i])
//     }
//     return anwser
// };

/**
 * 给你一个整数数组 nums，返回 数组 answer ，
 * 其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
 * 当前数的答案 就是  左边的乘积 乘 右边的乘积
 * 空间复杂度 O(n)
 * @param nums
 */
function productExceptSelf(nums: number[]): number[] {
    const ans: number[] = [];
    let l: number[] = [];
    let r: number[] = [];
    l[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        l[i] = l[i - 1] * nums[i - 1];
    }
    r[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        r[i] = r[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        ans[i] = l[i] * r[i];
    }
    return ans;
}

/**
 * 给你一个整数数组 nums，返回 数组 answer ，
 * 其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
 * 当前数的答案 就是  左边的乘积 乘 右边的乘积  ans[i] =  l[i] * r[i]
 * 优化  空间复杂度 O(1)  输出数组不被视为额外空间
 * @param nums
 */
function productExceptSelf(nums: number[]): number[] {
    let l: number[] = [];
    l[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        l[i] = l[i - 1] * nums[i - 1];
    }

    let r = 1;
    //r 为 0 到 i-1的乘积 所以是-1
    for (let i = nums.length - 1; i >= 0; i--) {
        l[i] *= r;
        r *= nums[i];
    }

    return l;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
