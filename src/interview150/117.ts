import { _Node } from "./_ 117node";

function connect(root: _Node | null): _Node | null {
    if (!root) {
        return root
    }

    let cur = [root]
    while (cur.length > 0) {
        let nxt: _Node[] = []
        for (const node of cur) {
            if (node.left) {
                nxt.push(node.left)
            }
            if (node.right) {
                nxt.push(node.right)
            }
        }
        for (let i = 0; i < nxt.length; i++) {
            if (i === nxt.length - 1) {
                nxt[i].next = null
            }
            else {
                nxt[i].next = nxt[i+1]
            }
        }
        cur = nxt
    }
    return root

};