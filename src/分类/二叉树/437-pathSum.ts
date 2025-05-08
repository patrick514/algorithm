import { TreeNode } from "./treenode";

/**
 * 代码中的「恢复现场」用意何在？

// 答：如果不恢复现场，当我们递归完左子树，要递归右子树时，cnt 中还保存着左子树的数据。
// 但递归到右子树，要计算的路径并不涉及到左子树的任何节点，如果不恢复现场，cnt 中统计的前缀和个数会更多，我
// 们算出来的答案可能比正确答案更大。

// 问：为什么要在递归完右子树后才能恢复现场？能否在递归完左子树后就恢复现场呢？

// 答：想一想，恢复现场恢复的是什么？是去掉当前节点的信息。递归右子树的时候需不需要当前节点的信息？
// 需要。所以要在递归完右子树后，才能恢复现场。

// 问：为什么递归参数 s 不需要恢复现场？

// 答：s 是基本类型，在函数调用的时候会复制一份往下传递，s += node.val 修改的仅仅是当前递归函数中的 s 参数，
// 并不会影响到其他递归函数中的 s。注：如果把 s 放在递归函数外，此时只有一个 s，执行 s += node.val 就会影响全局了。
 * 路径总和
 * @param root 
 * @param targetSum 
 * @returns 
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
    let res = 0;

    const map: Map<number, number> = new Map();
    //为什么设1，因为从根节点开始，就没法算，所以设1
    map.set(0, 1);
    const dfs = (r: TreeNode | null, s: number) => {
        if (!r) {
            return;
        }
        s += r.val;
        //和为0的路径是不存在的 
        // 根节点值为 1，targetSum=1。如果不把 0 加到哈希表中，按照我们的算法，
        // 没法算出这里有 1 条符合要求的路径
        if (map.has(s - targetSum)) {
            res += map.get(s - targetSum)!;
        }
        map.set(s, (map.get(s) || 0) + 1);
        dfs(r.left, s);
        dfs(r.right, s);

        map.set(s, map.get(s)! - 1);

        return;
    };
    dfs(root, 0);
    return res;
}

const node1 = new TreeNode(1);
pathSum(node1, 0);
