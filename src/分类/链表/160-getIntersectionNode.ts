import { ListNode } from "./listnode";

/**
 * 相交链表  使用哈希
 * @param headA
 * @param headB
 * @returns 得到相交的节点
 */
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     const amap = new Map();
//     let a = headA;
//     let b = headB;
//     while(a !== null){
//         amap.set(a,1);
//         a = a.next;
//     }

//     while (b !== null) {
//         if(amap.get(b)){
//             return b;
//         }
//         b =b.next;
//     }

//     return null;
// };

/**
 * 相交链表  使用双指针
 * @param headA
 * @param headB
 * @returns 得到相交的节点
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let p = headA;
  let q = headB;
  while (p !== q) {
    p = p ? p.next : headB
    q = q ? q.next : headA
  }
  return p;
}
