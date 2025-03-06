import { ListNode } from "./listnode";

function partition(head: ListNode | null, x: number): ListNode | null {
    let small_dummy = new ListNode(0)
    let big_dummy = new ListNode(0)

    let small =small_dummy
    let big = big_dummy

    while(head !==null){
        if(head.val < x){
            small.next = head
            small = small.next
        }else{
            big.next = head
            big = big.next
        }
        head = head.next
    }
    small.next = big_dummy.next
    big.next = null
    return small_dummy.next
};