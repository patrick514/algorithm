// // 这个函数使用了快速排序算法（Quick Sort）来对数组进行排序
// function quickSort<T>(arr: T[]): T[] {
//     // 如果数组的长度小于2，就不需要排序，直接返回原数组
//     if (arr.length < 2) return arr;

//     // 选择中间的元素作为“枢纽值”（pivot）
//     const pivot = arr[Math.floor(arr.length / 2)];

//     // 将数组分为三部分：
//     // left: 存放所有小于 pivot 的元素
//     const left = arr.filter(item => item < pivot);
//     // equal: 存放所有等于 pivot 的元素
//     const equal = arr.filter(item => item === pivot);
//     // right: 存放所有大于 pivot 的元素
//     const right = arr.filter(item => item > pivot);

//     // 递归地对左右两个部分进行排序，并将结果合并起来
//     return [...quickSort(left), ...equal, ...quickSort(right)];
// }

function swap(nums: number[], i: number, j: number): void {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
//选择数组中的某个元素作为“基准数”，将所有小于
// 基准数的元素移到其左侧，而大于基准数的元素移到其右侧。
function partition(nums: number[], left: number, right: number) {
  let pivot = nums[left];
  let i = left + 1;
  let j = right;
  while (true) {
    while (i <= j && nums[i] <= pivot) {
      i++;
    }
    while (i <= j && nums[j] >= pivot) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
  }
  swap(nums, left, j);
  //返回基准
  return j;
}

function quickSort(nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  const pivot = partition(nums, left, right);
  //递归左半
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
  return nums;
}

// 示例：对一个数组进行排序并打印结果
const array = [5, 2, 8, 3, 9, 7, 1, 4, 6];
console.log("原数组:", array);
// quickSort(array,0,array.length)
console.log("排序后的数组:", quickSort(array, 0, array.length - 1));
