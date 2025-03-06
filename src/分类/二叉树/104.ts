

function maxDepth(root: TreeNode | null): number {
    if(root === null)
        return 0
    let leftdep = maxDepth(root.left)
    let rightdep = maxDepth(root.right)
    return Math.max(leftdep,rightdep) + 1
};
