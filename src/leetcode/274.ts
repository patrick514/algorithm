function hIndex(citations: number[]): number {
   citations.sort((a: number, b: number) => a - b);
   let h = 0

  
   let i = citations.length - 1
   while (i >= 0 && citations[i] > h){
      h++;
      i--;
   }
//    console.log(sort_citations)
   return h
};
// const hIndex = (citations: number[]): number => {
//    citations.sort((a: number, b: number) => a - b);
//    let h = 0, i = citations.length - 1;
//    while (i >= 0 && citations[i] > h) {
//       h++;
//       i--;
//    }
//    return h;
// };

console.log(hIndex([1,3,1]))
console.log(hIndex([3, 0, 6, 1, 5]))
console.log(hIndex([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]))
// 0 1 3 5 6
// 1 1 3