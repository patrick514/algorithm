function searchMatrix_binarysearch(matrix: number[][], target: number): boolean {
    if (!matrix.length || !matrix[0].length) {
        return false
    }
    let m = matrix.length//行
    let n = matrix[0].length//列

    let left = 0
    let right = m * n - 1

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
                                        // 关键 行    列
        let midvalue = matrix[Math.floor(mid / n)][mid %n]
        if(midvalue === target){
            return true
        }
        else if(midvalue < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return false

};


/**
 * 数组拍平
 * @param nums 
 * @returns 
 */
function flat(nums:any[]):any[]{
    let result:any[] = []
    nums.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(flat(item))
        }else{
            result.push(item)
        }
    });
    return result
}
function searchMatrix(matrix: number[][], target: number): boolean {
    const mat = flat(matrix)
    let left = 0
    let right = mat.length-1
    while(left <= right){
        let mid = Math.floor((right-left)/2 + left)
        if(mat[mid] === target){
            return true
        }else if(mat[mid] < target){
            left = mid  +1
        }else{
            right  = mid -1
        }
    }
    return false
};
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],3))



