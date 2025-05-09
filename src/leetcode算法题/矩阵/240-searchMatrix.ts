/**
 * z字形查找
 *找20
    15 19 22 16 17 26 23 21 18
 * @param matrix
 * @param target
 * @returns
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;
    let i = 0;

    while (i <= row && col >= 0) {
        let cur = matrix[i][col];
        if (cur === target) {
            return true;
        }
        //
        if (cur < target) {
            i++;
        } else if (cur > target) {
            col--;
        }
    }
    return false;
}

/**
 * 对每一行使用二分查找
 * @param matrix
 * @param target
 * @returns
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    const binarySearch = (nums: number[], target: number) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((right - left) / 2 + left);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    };

    for (const row of matrix) {
        const index = binarySearch(row, target);
        if (index >= 0) {
            return true;
        }
    }

    return false;
}

console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30],
        ],
        20
    )
);
