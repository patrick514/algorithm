import { ListNode } from "../listnode";

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let tmp = dummy;

    while(tmp.next !== null && tmp.next?.next !== null){
        let left = tmp.next;
        let right = tmp.next.next;
        tmp.next = right;
        left.next=  right.next;
        right.next = left;
        tmp = left;
    }
    
    return dummy.next;

};

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
swapPairs(node1)