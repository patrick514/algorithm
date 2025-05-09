/**
 * 回文链表
 * 先得到链表长度
 * 然后前一半进入栈
 * 后一半与栈弹出的元素进行比较
 * @param head
 * @returns
 */
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true;
  }
  let len = 0;
  let h: ListNode | null = head;
  let stack: ListNode[] = [];
  while (h !== null) {
    len++;
    h = h.next;
  }
  h = head;
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (h !== null) {
      stack.push(h);
      h = h.next;
    }
  }

  if (len % 2 === 1) {
    h = h!.next;
  }

  while (h !== null) {
    if (stack.pop()?.val !== h.val) {
      return false;
    }
    h = h.next;
  }
  return true;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(2);
const node4 = new ListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;

isPalindrome(node1);
console.log(isPalindrome(node1));
