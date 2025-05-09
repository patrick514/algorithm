import { ListNode } from "./listnode";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let p0 = dummy;
  let n = 0;

  // 计算链表长度
  let curr = head;
  while (curr !== null) {
    n++;
    curr = curr.next;
  }

  // 每次反转前初始化 pre 和 cur
  while (n >= k) {
    let pre: ListNode | null = null;
    let cur: ListNode | null = p0.next;

    // 反转 k 个节点 ts 报错cur可能为null
    for (let i = 0; i < k && cur !== null; i++) {
      let nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }

    // 连接反转后的部分
    let nxt = p0.next; // 保存当前组的第一个节点
    if (nxt !== null) {
      nxt.next = cur; // 连接到剩余未反转的部分
    }
    p0.next = pre; // 当前组的头节点是反转后的头节点
    p0 = nxt!; // 移动 p0 到当前组最后一个节点

    n -= k; // 更新剩余节点数
  }

  return dummy.next;
}

// function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//   const dummy = new ListNode(0);
//   let p0 = dummy;

//   let len = 0;
//   let cur = head;
//   while (cur !== null) {
//     len++;
//     cur = cur.next;
//   }

//   while (len >= k) {
//     let pre = p0;
//     cur = p0.next;
//     for (let i = 0; i < k && cur !== null; i++) {
//       let nxt = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = nxt;
//     }

//     let nxt = p0.next;

//     nxt!.next = cur;
//     p0.next = pre;
//     p0 = nxt!;
//     len -= k;
//   }

//   return dummy.next;
// }
