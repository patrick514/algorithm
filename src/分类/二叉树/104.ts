
import {TreeNode } from '../../treenode'
// function maxDepth(root: TreeNode | null): number {
//     if(root === null)
//         return 0
//     let leftdep = maxDepth(root.left)
//     let rightdep = maxDepth(root.right)
//     return Math.max(leftdep,rightdep) + 1
// };


//递归  递归左子树的深度，递归右子树的深度，取最大加上root
function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0
    }
    let leftdep = maxDepth(root.left)
    let rightdep = maxDepth(root.right)
    return Math.max(leftdep,rightdep) + 1
};
