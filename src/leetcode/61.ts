import { ListNode } from "./listnode";

//头尾节点    平移后  只确定最后断开的节点
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let copy:number[] = []
    let cur = head
    let i = 0
    while(cur !== null){
        copy[i] = cur.val
        cur = cur.next
        i++
    }
    //判断单个元素和空元素
    if(head === null || copy.length === 1){
        return head
    }
    let ans:number[] = []
    //向右移动数组
    for(let i = 0;i<copy.length;i++){
        ans[(i + k) % copy.length] = copy[i]
    }
    head = new ListNode(ans[0])
    cur = head
    for(let i = 1;i<ans.length;i++){
        cur.next = new ListNode(ans[i])
        cur = cur?.next
    }
    return head

    
};

let node1 = new ListNode(1)
let node2 = new ListNode(2)

let node3 = new ListNode(3)

let node4 = new ListNode(4)

let node5 = new ListNode(5)

// let node6 = new ListNode(4)

// let node7 = new ListNode(5)
node1.next = node2
node2.next = node3

node3.next = node4

node4.next = node5
console.log(rotateRight(node1,2))