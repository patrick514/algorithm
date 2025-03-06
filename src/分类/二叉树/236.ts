
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // 当前为p，q  当前为空
    if(!root || root ===p || root === q){
        return root
    }

    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    // 左子树 和右子树 都找到
    if(left && right){
        return root
    }
    // 只有左子树找到
    if(left){
        return left
    }
    // 只有右子树找到    左右都没有
    else{
        return right
    }
};