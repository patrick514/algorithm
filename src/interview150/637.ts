import { TreeNode } from "./treenode";

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) {
        return [0]
    }
    let cur = [root]
    let ans: number[] = []
    //这里判断cur数组是否为空  用长度判断就行了
    while (cur.length > 0) {
        let nxt: TreeNode[] = []
        let vals: number[] = []
        for (const node of cur) {
            vals.push(node.val)
            //下一层的节点存在  nxt数组
            if (node.left) {
                nxt.push(node.left)
            }
            if (node.right) {
                nxt.push(node.right)
            }

        }
        let avg = 0
        for (let i = 0; i < vals.length; i++) {
            avg += vals[i]
        }
        avg /= vals.length
        //cur 改成下一层 即 nxt
        ans.push(avg)
        cur = nxt
    }
    return ans

};


let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
node1.left = node2
node1.right = node3
node2.left = node4
averageOfLevels(node1)