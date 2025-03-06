import { TreeNode } from "./treenode";

function invertTree(root: TreeNode | null): TreeNode | null {

    if(root === null){
        return null
    }
    root.left = invertTree(root.left)
    root.right =  invertTree(root.right)
    let tmp = root.left
    root.left = root.right
    root.right = tmp
    return root
};