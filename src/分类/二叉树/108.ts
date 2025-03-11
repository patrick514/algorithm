import { TreeNode } from "../../treenode";
// function sortedArrayToBST(nums: number[]): TreeNode | null {
//     const dfs = (left:number, right:number) : TreeNode | null => {
//         if(left > right){
//             return null
//         }
//         //每次都取左边
//         const m = Math.floor((right+left)/2)
//         const node = new TreeNode(nums[m])
//         node.left = dfs(left,m-1)
//         node.right = dfs(m + 1,right)
//         return node
//     }

//     return dfs(0,nums.length-1)
// };

function sortedArrayToBST(nums: number[]): TreeNode | null {
    //首先左子树是二叉搜索树，右子树也是二叉搜索树，中序遍历生成，找中间
    //递归左边，递归右半，
  const dfs = (left, right): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((right - left) / 2 + left);
    const node = new TreeNode(nums[mid]);
    node.left = dfs(left, mid - 1);
    node.right = dfs(mid + 1, right);

    return node;
  };

  return dfs(0, nums.length - 1);
}
