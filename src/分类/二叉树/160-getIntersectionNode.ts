
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * 使用哈希集合
 * @param headA 
 * @param headB 
 * @returns 
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const set = new Set()
    let a = headA;
    let b = headB;
    while(a !== null){
        set.add(a);
        a = a.next;
    }

    while (b !== null) {
        if(set.has(b)){
            return b;
        }
        b =b.next;
    }

    return null;
};


/**
 * 使用双指针
 * @param headA 
 * @param headB 
 * @returns 
 */
function getIntersectionNode_twoPoints(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    
};