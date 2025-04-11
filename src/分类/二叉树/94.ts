import { TreeNode } from "./treenode";

/**
 * 中序遍历 不使用递归
 * @param root 左 中 右
 * @returns 中序遍历
 */
function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  let stack: TreeNode[] = [];
  let cur: TreeNode | null = root;
  while (cur != null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop()!;
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
}


/**
 * 后序遍历 不使用递归
 * @param root 左 右 中
 * @returns 
 */
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let lastVisited: TreeNode | null = null; // 记录上一个访问的节点
  let current: TreeNode | null = root;

  while (current !== null || stack.length > 0) {
    // 尽可能向左走，并将节点压入栈中
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // 栈顶节点
    const peekNode = stack[stack.length - 1];

    // 如果右子树存在且未被访问，移动到右子树
    if (peekNode.right !== null && lastVisited !== peekNode.right) {
      current = peekNode.right;
    } else {
      // 如果右子树不存在或已经被访问，则访问当前节点
      res.push(peekNode.val);
      lastVisited = stack.pop()!;
    }
  }
  return res;
}

/**
 * 先序遍历 不使用递归
 * @param root 中 左 右
 * @returns 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];

  if (root) stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop()!;
    res.push(node.val); // 访问当前节点

    // 先压右子树再压左子树，这样左子树会先被处理
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
}
