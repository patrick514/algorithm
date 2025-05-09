import { TreeNode } from "./treenode";

//递归翻转左右子树，将左右子树交换，返回头节点
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    let lefttmp = root.left;
    root.left = root.right;
    root.right = lefttmp;
    return root;
}
