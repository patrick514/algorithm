import { ListNode } from "./listnode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let map = new Map()
    let dummy = new ListNode(0, head)
    let cur = head
    let pre = dummy
    while (cur !== null) {
        if (map.has(cur.val)) {
            map.set(cur.val, map.get(cur.val) + 1)
        } else {
            map.set(cur.val, 1)
        }
        cur = cur.next
    }
    cur = head
    while (cur !== null) {
        if (map.get(cur.val) > 1) {
            cur = cur.next
            pre.next = cur
            
        } else {
            pre = pre.next!
            cur = cur?.next!
        }

    }
    head = dummy.next

    return dummy.next

};

let node1 = new ListNode(1)
let node2 = new ListNode(1)

let node3 = new ListNode(1)

let node4 = new ListNode(2)

let node5 = new ListNode(3)

let node6 = new ListNode(4)

let node7 = new ListNode(5)
node1.next = node2
node2.next = node3

node3.next = node4

node4.next = node5


// node5.next = node6
// node6.next = node7
console.log(deleteDuplicates(node1))





