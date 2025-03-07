class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//先把一个遍历完，然后剩下的直接插，都是升序链表
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let l1 = list1;
  let l2 = list2;
  let dummy = new ListNode(0);
  let l3 = dummy
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  while (l1 !== null) {
    l3.next = l1;
    l1 = l1.next;
    l3 = l3.next;
  }

  while (l2 !== null) {
    l3.next = l2;
    l2 = l2.next;
    l3 = l3.next;
  }
  return dummy.next;
}


const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(4)
const node6 = new ListNode(1)
const node7 = new ListNode(3);

const node8 = new ListNode(4);

node1.next = node2
node2.next = node3

node6.next = node7
node7.next = node8
mergeTwoLists(node1,node6)