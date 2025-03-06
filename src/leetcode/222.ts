import { TreeNode } from "./treenode";

function countNodes(root: TreeNode | null): number {
    let nodecnt = 0
    dfs(root)
    function dfs(treenode:TreeNode | null){
        if(!treenode){
            return
        }
        nodecnt++
        dfs(treenode.left)
        dfs(treenode.right)
    }

    return nodecnt
};


let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node1.left = node2
node1.right = node3
console.log(countNodes(node1))