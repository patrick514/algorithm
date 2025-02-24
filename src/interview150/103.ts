import { TreeNode } from "./treenode";

function zigzagLevelOrder(root: TreeNode | null): number[][] {

    if (!root) {
        return []
    }
    let cur = [root]
    let flag = false
    let ans: number[][] = []
    while (cur.length > 0) {
        let vals: number[] = []
        let nxt: TreeNode[] = []
      
        for (const node of cur) {
            vals.push(node.val)
            if (node.left) {
                nxt.push(node.left)
            }
            if (node.right) {
                nxt.push(node.right)
            }
        }

        if (flag) {
            ans.push(vals.reverse())
        }else{
            ans.push(vals)
        }
        
        cur = nxt
        flag = !flag

    }
    return ans
};

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
node1.left = node2
node1.right = node3
node3.right = node4
node2.right = node5
zigzagLevelOrder(node1)