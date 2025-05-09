import {ListNode} from './listnode'


function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let tail = head;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = x + y + carry;
    tail.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    tail = tail.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head.next;
}
