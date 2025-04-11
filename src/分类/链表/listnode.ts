
export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}



const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(2)
const node4 = new ListNode(1)
node1.next = node2
node2.next = node3
node3.next = node4


