
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


const tr1 = new TreeNode(1)
const tr2 = new TreeNode(2)
const tr3 = new TreeNode(3)
tr1.right = tr2
tr2.left = tr3
