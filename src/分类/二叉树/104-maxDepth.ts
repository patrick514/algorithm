
import { TreeNode } from "./treenode";


/**
 * 深度优先搜索
 * @param root 递归  递归左子树的深度，递归右子树的深度，取最大加上root
 * @returns 
 */
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let leftDep = maxDepth(root.left);
    let rightDep = maxDepth(root.right);
    return Math.max(leftDep, rightDep) + 1;
}
