export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     // 当前为p，q  当前为空
//     if(!root || root ===p || root === q){
//         return root
//     }

//     let left = lowestCommonAncestor(root.left,p,q)
//     let right = lowestCommonAncestor(root.right,p,q)
//     // 左子树 和右子树 都找到
//     if(left && right){
//         return root
//     }
//     // 只有左子树找到
//     if(left){
//         return left
//     }
//     // 只有右子树找到    左右都没有
//     else{
//         return right
//     }
// };

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  //如果 root 本身就是 p 或 q，则直接返回 root，因为 p 或 q 自己就是自己的祖先。
  if (root === null || p === root || q === root) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  //左右子树都找到了，说明最近祖先就是当前节点
  if (left && right) {
    return root;
  }
  //前面过了，说明p，q都在一边子树上 都在左
  if (left) {
    return left;
  }
  //都在右
  else {
    return right;
  }
}
