import { ListNode } from "./listnode";
/**
 * 先快慢指针找到 链表中点
 * 然后反转第二个链表
 * 然后插入
 * @param head 
 * @returns 
 */
// function reorderList(head: ListNode | null): void {
//   if (head === null || head!.next === null) {
//     return;
//   }
//   let slow: ListNode | null = head;
//   let fast: ListNode | null = head!.next;
//   //这里 1 2   3  4  变为  1423 
//   // 1 2 3 4  slow = 2  1 2 3 4 5 slow = 3
//   while (fast && fast.next) {
//     slow = slow!.next;
//     fast = fast.next?.next;
//   }
//   let l1 = head;
//   let l2 = slow!.next;
//   slow!.next = null;
//   l2 = reverseList(l2);

//   let cur2 = l2;
//   while (l2 !== null) {
//     cur2 = l2;
//     l2 = l2.next;
//     cur2.next = l1.next;
//     l1.next = cur2;
//     l1 = cur2.next!;
//   }
//   console.log(fast);
// }
/**
 * 重排链表
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let cur = head;
  while (cur !== null) {
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  return pre;
}


function reorderList(head: ListNode | null): void {
  if (!head?.next) return;

  // 1. 找到中点
  const mid = findMiddle(head);
  // 2. 反转后半部分
  const right = reverseList(mid.next);
  mid.next = null;
  // 3. 合并两个链表
  mergeLists(head, right);
}

// 提取找中点逻辑
function findMiddle(head: ListNode): ListNode {
  let slow = head,
    fast = head.next;
  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  return slow;
}

// 优化合并逻辑
function mergeLists(l1: ListNode | null, l2: ListNode | null): void {
  while (l2) {
    const temp1 = l1!.next;
    const temp2 = l2.next;
    l1!.next = l2;
    l2.next = temp1;
    l1 = temp1;
    l2 = temp2;
  }
}


const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

reorderList(node1);
