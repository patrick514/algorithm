const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

//二叉搜索树
class BinarySearchTree {
  constructor(comparFn = defaultCompare) {
    this.comparFn = comparFn
    this.root = null
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.comparFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  //callback 函数参数 打印 计算 收集数据
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) {
      return false
    } else if (this.comparFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.comparFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (node == null) {
      return null
    }
    if (this.comparFn(key, node.key) == Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } if (this.comparFn(key, node.key) == Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    }

    if (node.left == null && node.right == null) {
      node = undefined
      return node
    }
    if (node.left == null) {
      node = node.right
      return node
    } if (node.right == null) {
      node = node.left
      return node
    }

    const aux = this.minNode(node.right)
    node.key = aux.key
    node.right = this.removeNode(node.right, aux.key)
    return node
  }
}

const tree = new BinarySearchTree();
tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.remove(8)

const printNode = (value) => console.log(value); // {6}
tree.postOrderTraverse(printNode); // {7}

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

console.log(tree.root.key)


const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};
class AVLTree extends BinarySearchTree {
  constructor(comparFn = defaultCompare) {
    super(comparFn)
    this.comparFn = comparFn
    this.root = null
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
  }

  /**
    * Left left case: rotate right
    *
    *       b                           a
    *      / \                         / \
    *     a   e -> rotationLL(b) ->   c   b
    *    / \                             / \
    *   c   d                           d   e
    *
    * @param node Node<T>
    */
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  /**
   * Left right case: rotate left then right
   * @param node Node<T>
   */
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  /**
   * Right left case: rotate right then left
   * @param node Node<T>
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else {
      node.right = this.insertNode(node.right, key);
    }

    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // Left left case
        node = this.rotationLL(node);
      } else {
        // Left right case
        node = this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // Right right case
        node = this.rotationRR(node);
      } else {
        // Right left case
        node = this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key); // {1}
    if (node == null) {
      return node;
    }

    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // Left left case
        node = this.rotationLL(node);
      } else {
        // Left right case
        node = this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // Right right case
        node = this.rotationRR(node);
      } else {
        // Right left case
        node = this.rotationRL(node);
      }
    }
    return node;
  }

}
