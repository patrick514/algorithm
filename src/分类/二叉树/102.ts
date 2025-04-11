import { TreeNode } from "./treenode";
// function levelOrder(root: TreeNode | null): number[][] {
//     if (!root) {
//         return []
//     }
//     let cur = [root]
//     let ans: number[][] = []
//     //这里判断cur数组是否为空  用长度判断就行了
//     while (cur.length > 0 ) {
//         let nxt: TreeNode[] = []
//         let vals: number[] = []
//         for (const node of cur) {
//             vals.push(node.val)
//             //下一层的节点存在  nxt数组
//             if (node.left) {
//                 nxt.push(node.left)
//             }
//             if (node.right) {
//                 nxt.push(node.right)
//             }

//         }
//         //cur 改成下一层 即 nxt
//         ans.push(vals)
//         cur = nxt
//     }
//     return ans
// };


/**
 * 两个数组
 * @param root 
 * @returns 
 */
function levelOrder(root: TreeNode | null): number[][] {
  let ans: number[][] = [];
  if (!root) {
    return [];
  }
  let cur: TreeNode[] = [root];
  //用数组存放每层的节点，按左节点，右节点的顺序
  while (cur.length !== 0) {
    let vals:number[] = [];
    let nxt: TreeNode[] = [];
    for(const node of cur){
        vals.push(node.val)
        if(node.left){
            nxt.push(node.left)
        }
        if(node.right){
            nxt.push(node.right)
        }
    }
    ans.push(vals)
    cur = nxt
  }
  return ans;
}

/**
 * 一个队列
*/

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
levelOrder(node1);
