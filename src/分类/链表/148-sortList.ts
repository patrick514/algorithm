import { ListNode } from "./listnode";

// 快慢指针实现的链表归并排序 快指针找到链表的中点
// function sortList(head: ListNode | null): ListNode | null {
//     // 链表为空或只有一个节点，直接返回
//     if (!head || !head.next) {
//         return head;
//     }
//     let slowPre:ListNode|null = new ListNode(0)

//     let slow: ListNode | null = head;
//     let fast: ListNode | null = head;
//     slowPre.next = slow

//     while (fast && fast.next) {
//         slowPre = slowPre.next!
//         slow = slow.next!;
//         fast = fast.next.next!;

//     }

//     // 分割链表
//     let mid = slowPre;
//     let leftHead = head;
//     let rightHead = mid.next;
//     mid.next = null;

//     // 递归排序左右部分
//     let sortedLeft = sortList(leftHead);
//     let sortedRight = sortList(rightHead);

//     // 合并已排序的部分
//     return merge(sortedLeft, sortedRight);
// }

// // 合并两个已排序链表 新建dummy节点，一个一个按顺序放在其后面，然后判断剩下的节点
// function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
//     let dummy = new ListNode(0);  // 虚拟头节点
//     let cur = dummy;

//     // 合并两个链表
//     while (left && right) {
//         if (left.val < right.val) {
//             cur.next = left;
//             left = left.next;
//         } else {
//             cur.next = right;
//             right = right.next;
//         }
//         cur = cur.next!;
//     }

//     // 处理剩余节点
//     if (left) {
//         cur.next = left;
//     } else if (right) {
//         cur.next = right;
//     }

//     return dummy.next;
// }
/**
 * 首先找到 链表的中间节点
 * 然后分成两段
 * 递归两段链表 
 * 最后进行合并 两个有序链表
 * @param head 
 * @returns 
 */
function sortList(head: ListNode | null): ListNode | null {
  // 链表为空或只有一个节点，直接返回
  if (!head || !head.next) {
    return head;
  }
  let slowPre: ListNode | null = new ListNode(0);

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slowPre = slow;
    slow = slow.next!;
    fast = fast.next.next;
  }
  //分割链表  分成两段
  let mid = slowPre;
  let leftHead = head
  let rightHead = mid.next
  mid.next = null
  //得到排好序的左半 右半
  const sortedLeft = sortList(leftHead)
  const sortedRight = sortList(rightHead)
  return merge(sortedLeft,sortedRight)
}

// 合并两个已排序链表 新建dummy节点，一个一个按顺序放在其后面，然后判断剩下的节点
function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  let dummy = new ListNode(0); // 虚拟头节点
  let cur = dummy;

  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }

  if (left) {
    cur.next = left;
  } else {
    cur.next = right;
  }
  return dummy.next;
}








// 测试函数
function createLinkedList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head: ListNode | null): void {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// 示例测试
let head1 = createLinkedList([4, 2, 1, 3]);
let sortedHead1 = sortList(head1);
printLinkedList(sortedHead1); // 输出: [1, 2, 3, 4]

let head2 = createLinkedList([-1, 5, 3, 4, 0]);
let sortedHead2 = sortList(head2);
printLinkedList(sortedHead2); // 输出: [-1, 0, 3, 4, 5]

let head3 = createLinkedList([]);
let sortedHead3 = sortList(head3);
printLinkedList(sortedHead3); // 输出: []
