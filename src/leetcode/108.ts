import { TreeNode } from "./treenode";
function sortedArrayToBST(nums: number[]): TreeNode | null {
    const dfs = (left:number, right:number) : TreeNode | null => {
        if(left > right){
            return null
        }
        //每次都取左边
        const m = Math.floor((right+left)/2)
        const node = new TreeNode(nums[m])
        node.left = dfs(left,m-1)
        node.right = dfs(m + 1,right)
        return node
    }

    return dfs(0,nums.length-1)
};