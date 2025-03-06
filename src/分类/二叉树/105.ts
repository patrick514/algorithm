import { TreeNode } from "./treenode";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    let rootval = preorder[0]
    let root = new TreeNode(rootval)
    let index = inorder.indexOf(rootval)
    //     3              前序preorder:   3  9  20 15 7        
    // 9      20          中序inorder :   9  3  15 20 7     
    //      15   7         slice 分割  左闭右开
    root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index+1))
    return root
   
};