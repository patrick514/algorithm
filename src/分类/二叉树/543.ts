class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;
  const dfs = (r: TreeNode | null): number => {
    if (!r) {
      return 0;
    }

    let lres = dfs(r.left);
    let rres = dfs(r.right);
    res = Math.max(res, lres + rres + 1);
    //这里要加一，就是加上目前节点
    return Math.max(lres, rres) + 1;
  };
  dfs(root);
  return res - 1;
}

const tr1 = new TreeNode(1);
const tr2 = new TreeNode(2);
const tr3 = new TreeNode(3);
const tr4 = new TreeNode(4);

const tr5 = new TreeNode(5);

tr1.left = tr2;
tr1.right = tr3;
tr2.left = tr4;
tr2.right = tr5;
diameterOfBinaryTree(tr1);
