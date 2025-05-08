import { TreeNode } from "./treenode";


function kthSmallest(root: TreeNode | null, k: number): number {
  let tree: number[] = [];
  let ans = 0;
  const dfs = (node:TreeNode | null) => {
    if (!node) {
        return
    }
    dfs(node.left);
    tree.push(node.val)
    dfs(node.right)
  };
  dfs(root);
  ans = tree[k - 1]
  return ans
}

function kthSmallest_pro(root: TreeNode | null, k: number): number {
    let ans = 0
    let cnt = 0
    const dfs = (node:TreeNode | null)=>{
      if(!node){
        return
      }
      dfs(node.left)
      cnt++
      if(cnt === k){
        ans = node.val
        return
      }
      dfs(node.right)
    }
    dfs(root)
    return ans
}

let node1 = new TreeNode(301);
let node2 = new TreeNode(200);
let node3 = new TreeNode(600);
let node4 = new TreeNode(100);
let node5 = new TreeNode(300);
node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;
kthSmallest_pro(node1, 3);
