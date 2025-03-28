// 手撕:数组连续的数字用-连接，不连续的用,隔开
// [1,2,3,5,6,10]=>'1-3.5-6.10


function mergeIntervals(arr: number[]): string {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0].toString();

  const result: string[] = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (i === arr.length || arr[i] !== end + 1) {
      if (start === end) {
        result.push(start.toString());
      } else {
        result.push(`${start}-${end}`);
      }

      if (i < arr.length) {
        start = arr[i];
        end = arr[i];
      }
    } else {
      end = arr[i];
    }
  }
  return result.join(',')
}

// 测试用例
console.log(mergeIntervals([1, 2, 3, 5, 6, 10])); // '1-3.5-6.10'
console.log(mergeIntervals([1, 2, 3, 4, 5])); // '1-5'
console.log(mergeIntervals([1, 3, 5, 7])); // '1.3.5.7'
console.log(mergeIntervals([1])); // '1'
