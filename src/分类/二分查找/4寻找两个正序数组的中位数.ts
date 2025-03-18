function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let n1 = 0;
  let n2 = 0;
  let len1 = nums1.length - 1;
  let len2 = nums2.length - 1;
  const n3: number[] = [];
  let ans;
  while (n1 <= len1 && n2 <= len2) {
    if (nums1[n1] < nums2[n2]) {
      n3.push(nums1[n1]);
      n1++;
    } else {
      n3.push(nums2[n2]);
      n2++;
    }
  }
  while (n1 <= len1) {
    n3.push(nums1[n1]);
    n1++;
  }
  while (n2 <= len2) {
    n3.push(nums2[n2]);
    n2++;
  }

  if (n3.length % 2 === 1) {
    ans = n3[Math.floor(n3.length / 2)];
  } else {
    let a1 = n3[Math.floor(n3.length / 2)-1];
    let a2 = n3[Math.floor(n3.length / 2) ];
    ans = (a1 + a2)/2;
  }
  return ans;
}

findMedianSortedArrays([1, 3], [2]);
