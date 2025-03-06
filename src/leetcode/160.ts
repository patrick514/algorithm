
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const amap = new Map();
    const bmap = new Map();
    let a = headA;
    let b = headB;
    while(a !== null){
        amap.set(a,1);
        a = a.next;
    }

    while (b !== null) {
        if(amap.get(b)){
            return b;
        }
        b =b.next;
    }

    return null;
};