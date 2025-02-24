
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}




function detectCycle(head: ListNode | null): ListNode | null {
    // if(!head || !head.next){
    //     return null;
    // }
    // let lmap = new Map();
    // let index = 0;
    // let h:ListNode | null = head;
    // while(h !== null){
    //     if(lmap.has(h)){
    //         return h;
    //     }
    //     lmap.set(h,1);
    //     h = h.next;
    // }
    // return null;
    if(!head || !head.next){
        return null
    }
    const set = new Set()
    let h:ListNode|null = head
    while(h!== null)
    {
        if(set.has(h)){
            return h
        }
        set.add(h)
        h = h.next
    }
    return null

};

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(2)
const node4 = new ListNode(1)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2
detectCycle(node1)
console.log(detectCycle(node1))