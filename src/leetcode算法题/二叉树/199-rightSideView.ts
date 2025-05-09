import { TreeNode } from "./treenode";
/**
 * 使用层序遍历
 * @param root
 * @returns
 */
function rightSideView_level(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    let cur = [root];
    let ans: number[][] = [];

    while (cur.length > 0) {
        let nxt: TreeNode[] = [];
        let vals: number[] = [];

        for (const node of cur) {
            vals.push(node.val);
            if (node.left) {
                nxt.push(node.left);
            }
            if (node.right) {
                nxt.push(node.right);
            }
        }
        ans.push(vals);
        cur = nxt;
    }
    let rightans: number[] = [];
    for (let i = 0; i < ans.length; i++) {
        rightans.push(ans[i][ans[i].length - 1]);
    }

    return rightans;
}

/**
 * 递归，先递归右子树，再递归左子树，当某个深度首次到达时，对应的节点就在右视图中。
    1
   /   \
  2     3
   \     \
    5     4
示例执行过程：
第一次访问：深度0，访问1，rightans=[1]
访问右子树：深度1，访问3，rightans=[1,3]
继续右子树：深度2，访问4，rightans=[1,3,4]
回溯到左子树：深度1，访问2（不加入，因为depth=1已有值）
继续左子树：深度2，访问5（不加入，因为depth=2已有值） 
* @param root 
 * @returns 
 */
function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    let rightans: number[] = [];
    const dfs = (node: TreeNode | null, deepth: number) => {
        if (!node) {
            return;
        }
        if (deepth === rightans.length) {
            rightans.push(node.val);
        }
        dfs(node.right, deepth + 1);
        dfs(node.left, deepth + 1);
    };
    dfs(root, 0);

    return rightans;
}
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
node1.left = node2;
node1.right = node3;
node3.right = node4;
node2.right = node5;
rightSideView(node1);
