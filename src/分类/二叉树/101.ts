import { TreeNode } from "../../treenode";
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
// function isSymmetric(root: TreeNode | null): boolean {

//     return check(root, root)


// };
// function check(p: TreeNode | null, q: TreeNode | null):boolean{
//     if (!p && !q) {
//         return true
//     }
//     if (!p || !q) {
//         return false
//     }

//     return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
// }

//判断都为空，有一个为空，值相同 左子树左和右子树右 左子树右和左子树左
function isSymmetric(root: TreeNode | null): boolean {
    return check(root,root)
};


function check(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q){
        return true
    }
    if(!p || !q){
        return false
    }

    return p.val === q.val &&  check(p.left,q.right) && check(p.right,q.left)
    
}