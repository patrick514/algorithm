class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function pathSum(root: TreeNode | null, targetSum: number): number {
    let res = 0;
    
    const map:Map<number,number>= new Map();
    map.set(0,1);
    const dfs = (r : TreeNode | null, s : number) =>{
        if(!r){
            return ;
        }
        s += r.val;
        if(map.has(s-targetSum)){
            res += map.get(s-targetSum)!;
        }
        map.set(s,(map.get(s) || 0) + 1);
        
        dfs(r.left,s);
        dfs(r.right,s);
        
        map.set(s, map.get(s)! - 1);
        
        return;
        
    }
    dfs(root,0);
    return res;
};

const node1 = new TreeNode(1)
pathSum(node1,0)