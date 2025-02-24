import { TreeNode } from "./treenode";

function getMinimumDifference(root: TreeNode | null): number {
    let ans = Infinity
    let tree:number[] = []

    const dfs = (p:TreeNode | null) =>{
        if(!p){
            return
        }
        dfs(p.left)
        tree.push(p.val)
        dfs(p.right)
    }
    dfs(root)
    for(let i = 0;i<tree.length-1;i++){
        if(Math.abs(tree[i] - tree[i+1]) < ans){
            ans = Math.abs(tree[i] - tree[i + 1]) 
        }
    }

    return ans
};

let node1 = new TreeNode(301)
let node2 = new TreeNode(200)
let node3 = new TreeNode(600)
let node4 = new TreeNode(100)
let node5 = new TreeNode(300)
node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5
getMinimumDifference(node1)