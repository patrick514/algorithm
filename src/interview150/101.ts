import { TreeNode } from "./treenode";
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true
    } else if (p === null || q === null) {
        return false
    } else if (p.val !== q.val) {
        return false
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
};
function isSymmetric(root: TreeNode | null): boolean {

    return check(root, root)


};
function check(p: TreeNode | null, q: TreeNode | null):boolean{
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }

    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}