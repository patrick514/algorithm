import { register } from "ts-node";
import { TreeNode } from "./treenode";


// function isValidBST(root: TreeNode | null): boolean {
//     //
//     let pre = -Infinity
//     //中序遍历    节点的左子树始终小于该节点
//     function inorder(node:TreeNode |null) {
//         if (node === null) {
//             return true
//         }
//         //pre就是当前的根节点的值
//         if (!inorder(node.left) || node.val <= pre) {
//             return false
//         }
//         pre = node.val

//         return inorder(node.right)

//     }

//     return inorder(root)
    
// };


function isValidBST(root: TreeNode | null): boolean {
    let pre = -Infinity
    const inorder = (node)=>{
        if(!node){
            return true
        }
        if(!inorder(node.left) || node.val <= pre){
            return false
        }
        pre = node.val
        return inorder(node.right)
    }

    return inorder(root)
    
};