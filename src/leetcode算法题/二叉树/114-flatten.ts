import { TreeNode } from "./treenode";
//直接前序遍历，然后生成链表
function flattenPreorder(root: TreeNode | null): void {
    if (!root) {
        return;
    }
    let record: number[] = [];
    preorder(root);

    function preorder(root: TreeNode | null) {
        if (!root) {
            return;
        }
        record.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    let pre = root;
    root.left = null;
    root.right = null;
    for (let i = 1; i < record.length; i++) {
        let treenode = new TreeNode(record[i]);
        pre.right = treenode;
        pre = treenode;
    }
}

//将左子树插入到右子树的地方
// 将原来的右子树接到左子树的最右边节点
// 考虑新的右子树的根节点，一直重复上边的过程，直到新的右子树为 null
/**
 * 
 * @param root  
 *  1
   / \
  2   5
 / \   \
3   4   6

//将 1 的左子树插入到右子树的地方
    1
     \
      2         5
     / \         \
    3   4         6        
//将原来的右子树接到左子树的最右边节点
    1
     \
      2          
     / \          
    3   4  
         \
          5
           \
            6
 */
function flatten(root: TreeNode | null): void {
    // while (root !== null) {
    //     //左子树为空，直接考虑下一个节点
    //     if (root.left == null) {
    //         root = root.right;
    //     } else {
    //         let pre: TreeNode | null = root.left;
    //         while (pre.right !== null) {
    //             pre = pre.right;
    //         }
    //         pre.right = root.right;

    //         root.right = root.left;
    //         root.left = null;
    //         root = root.right;
    //     }
    // }

    while (root !== null) {
        if (root.left === null) {
            root = root.right;
        } else {
            //pre 为左子树的最右下的节点
            let pre: TreeNode | null = root.left;
            //注意是pre.right
            while (pre.right !== null) {
                pre = pre.right;
            }
            pre.right = root.right;
            root.right = root.left;
            root.left = null;
            root = root.right;
        }
    }
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.left = node2;
node1.right = node3;

console.log(flatten(node1));
