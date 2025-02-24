function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }

    let mid = Math.floor((nums.length) / 2)
    let left = mergeSort(nums.slice(0, mid))
    let right = mergeSort(nums.slice(mid))


    return merge(left, right)

}


function merge(left: number[], right: number[]): number[] {
    let result: number[] = []
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}


console.log(mergeSort([1, 23, 4, 5, 6, 7]))