import { TreeNode } from "./treenode";

function sumNumbers(root: TreeNode | null): number {

    return dfs(root, 0)
};

//   1
// 2   3
function dfs(root:TreeNode | null, presum:number): number {
    //为空
    if (root === null) {
        return 0
    }
    //计算该层
    let sum = presum * 10 + root.val
    //叶子节点 直接返回
    if (!root.left && !root.right) {
        return sum
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum)
    }

}


let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node1.left = node2
node1.right = node3

console.log(sumNumbers(node1))