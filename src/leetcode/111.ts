import { TreeNode } from "./treenode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false
    }
    //当前节点 为 叶子节点时
    if (!root.left && !root.right) {
        return targetSum === root.val
    }
    //每向下遍历   减去当前节点的值
    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val)
};