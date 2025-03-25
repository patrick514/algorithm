function partitionLabels(s: string): number[] {
  let start = 0;
  let end = 0;
  let ans: number[] = [];
  const last = Array(26); //每个 字母 最后的位置
  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  //找到 前面一块最长的 ababcbacadefegdehijhklij 其中a就是最长的，因为end最大，当遍历到i===end时，说明合完了
  // 然后计算下一块
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - "a".charCodeAt(0)]);
    //等于的时候  说明这一块合完了，找完了
    if (end === i) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
}


partitionLabels("ababcbacadefegdehijhklij");
