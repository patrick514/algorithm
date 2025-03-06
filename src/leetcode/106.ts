import { TreeNode } from "./treenode";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0 || postorder.length === 0) {
        return null
    }
    let rootval = postorder[postorder.length - 1]
    let root = new TreeNode(rootval)
    let index = inorder.indexOf(rootval)

    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    //注意       后面postorder  index 不加1
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    return root
    //     3              后序postorder:   9    15 7 20   3     
    // 9      20          中序inorder :    9    3    15 20 7     
    //      15   7         slice 分割  左闭右开
};