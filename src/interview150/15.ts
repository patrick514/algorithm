// function threeSum(nums: number[]): number[][] {
//     nums = nums.sort((a, b) => a - b); 
//     let ans : number[][] = []
//     let n = nums.length
//     for(let i = 0;i<n-2;i++){
//         if(i>0 && nums[i] === nums[i-1]){
//             continue
//         }
//         let j = i+1
//         let k = n -1 

//         while(j <k){
//             let s = nums[i] + nums[j] + nums[k]
//             if(s > 0){
//                 k--
//             }else if(s < 0){
//                 j++
//             }else{
//                 ans.push([nums[i],nums[j],nums[k]])
//                 j++
//                 while(j <k && nums[j] === nums[j-1]){
//                     j++
//                 }
//                 k--
//                 while(k > j && nums[k] === nums[k -1] ){
//                     k--
//                 }
//             }

//         }
//     }
//     return ans
// };


// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
function threeSum(nums: number[]): number[][] {
    let ans: number[][] = [];
    nums = nums.sort((a, b) => (a - b));
    let n = nums.length - 1;
    if (nums[0] > 0) {
        return ans;
    }
    // i不动，l和r动
    for (let i = 0; i <= n - 2; i++) {
        //i要大于0，
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = n;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                ans.push([nums[i], nums[l], nums[r]]);
                l++;
                //判断重复
                while(l < r && nums[l] === nums[l-1]){
                    l++;
                }
                // r--;
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }

            }
        }
    }
    return ans;
}
threeSum([-1, 0, 1, 2, -1, -4])
// threeSum([0, 0, 0,0])

