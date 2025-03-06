import { TreeNode } from "./treenode";

function rightSideView(root: TreeNode | null): number[] {
    
    if(!root){
        return []
    }

    let cur = [root]
    let ans:number[][] = []

    while(cur.length >0){
        let nxt:TreeNode[] = []
        let vals: number[] = []

        for(const node of cur){

            vals.push(node.val)
            if(node.left){
                nxt.push(node.left)
            }
            if(node.right){
                nxt.push(node.right)
            }
            
        }
        ans.push(vals)
        cur = nxt
        
    }
    let rightans:number[] = []
    for(let i = 0;i<ans.length;i++){
        rightans.push(ans[i][ans[i].length-1])
    }
    
    return rightans
};


let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 =new TreeNode(5)
node1.left = node2
node1.right = node3
node3.right = node4
node2.right = node5
rightSideView(node1)