class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//使用快慢指针 快指针不为空，知道快慢指针在一个位置，则成环
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow!.next;
    fast = fast!.next?.next ?? null;
  }
  return true;
}

//使用哈希表 哈希表存储已经过的节点，如果当前节点已经过，则成环
// function hasCycle(head: ListNode | null): boolean {
//   if (!head || !head.next) {
//     return false;
//   }

//   const map  = new Map()
//   let cur:ListNode | null = head
//   while(cur!==null){
//     if(map.has(cur)){
//         return true
//     }
//     map.set(cur,1)
//     cur = cur.next
//   }
//   return false;
// }