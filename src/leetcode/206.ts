class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
    let pre : ListNode | null = null
    let cur = head
    while(cur!==null){
        let nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }

    return pre
}
