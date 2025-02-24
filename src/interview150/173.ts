import { TreeNode } from "./treenode";

class BSTIterator {
    stack: TreeNode[]
    constructor(root: TreeNode | null) {
        this.stack = []
        this.pushLeft(root)

    }


    pushLeft(node: TreeNode | null) {
        while (node) {
            this.stack.push(node)
            node = node.left
        }
    }

    next(): number {
        let nxt = this.stack.pop()
        if (nxt?.right) {
            this.pushLeft(nxt.right)
        }
        return nxt!.val
    }

    hasNext(): boolean {
        return this.stack.length > 0
    }
}