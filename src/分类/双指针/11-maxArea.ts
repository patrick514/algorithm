// function maxArea(height: number[]): number {
//     let i = 0,j=height.length-1
//     let max = 0
//     let maxi = i
//     let maxj = j
//     let container = 0
//     while(i < j){
//         let h = Math.min(height[i],height[j])
//         container = h * (j - i)
//         if(container > max){
//             max = container
//             maxi = i
//             maxj = j
//         }
//         if(height[i] > height[j]){
//             j--
//         }
//         else{
//             i++
//         }
//     }
//     // console.log(maxi,maxj)
//     return max
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([1, 1]))

//双指针 注意是高度乘坐标轴
// function maxArea(height: number[]): number {
//     let ans = 0;
//     let left = 0;
//     let right =height.length-1;
//     while(left < right){
//         let h = Math.min(height[left],height[right]);
//         let container =h*(right-left);
//         ans = Math.max(ans,container);
//         if(height[left] < height[right]){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return ans;
// };

function maxArea(height: number[]): number {
    let left = 0
    let right = height.length -1
    let ans = 0
    while(left < right){
        let h = Math.min(height[left],height[right])
        let area = h * (right - left)
        ans = Math.max(ans,area)
        if(height[left] > height[right]){
            right--
        }else{
            left++
        }
    }
    return ans
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])