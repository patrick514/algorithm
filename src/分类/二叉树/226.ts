// function invertTree(root: TreeNode | null): TreeNode | null {

import { TreeNode } from "./treenode";

//     if(root === null){
//         return null
//     }
//     root.left = invertTree(root.left)
//     root.right =  invertTree(root.right)
//     let tmp = root.left
//     root.left = root.right
//     root.right = tmp
//     return root
// };

//递归翻转左右子树，将左右子树交换，返回头节点
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  let lefttmp = root.left;
  root.left = root.right;
  root.right = lefttmp;
  return root;
}
