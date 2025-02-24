import { TreeNode } from "./treenode";

function flatten(root: TreeNode | null): void {
    if(!root){
        return
    }
    let record:number[] = []
    preorder(root)

    function preorder(root: TreeNode | null) {
        if (!root) {
            return
        }
        record.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    let pre = root
    root.left = null
    root.right = null
    for(let i =1 ;i<record.length;i++){
        let treenode = new TreeNode(record[i])
        pre.right = treenode
        pre = treenode
    }
};

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
node1.left = node2
node1.right = node3

console.log(flatten(node1))