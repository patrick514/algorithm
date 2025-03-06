import { ListNode } from "../listnode";
//计算链表长度
// function getlength(head: ListNode | null) {
//     let len = 0
//     while (head !== null) {
//         head = head.next
//         len++
//     }
//     return len
// }
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

//     let len = getlength(head)
//     let dummy = new ListNode(0,head)
//     let cur: ListNode | null = dummy

//     for (let i = 1; i < len - n + 1; i++) {
//         cur = cur?.next!
//     }
//     cur.next = cur!.next!.next

//     let ans = dummy.next
//     return ans

// };

//双指针    后指针比前指针多n
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let left: ListNode = dummy;
  let right: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    right = right!.next;
  }
  while (right !== null) {
    left = left.next!;
    right = right.next;
  }
  left.next = left.next!.next;
  
  return dummy.next;
}
const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
removeNthFromEnd(node1,1)