//双向链表节点
class DoubleListNode {
    key:number
  value: number;
  pre: DoubleListNode | null;
  next: DoubleListNode | null;

  constructor(key:number = 0,value: number = 0) {
    this.key  = key
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

//双向链表
class DoubleLinkedList {
  head: DoubleListNode;
  tail: DoubleListNode;
  size: number;

  constructor() {
    this.head = new DoubleListNode();
    this.tail = new DoubleListNode();
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.size = 0;
  }

  /**
   * 在头部之后添加节点
   * @param node
   */
  addFirst(node: DoubleListNode) {
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next!.pre = node;
    this.head.next = node;
    this.size++;
  }

  /**
   * 删除指定节点
   * @param node
   */
  removeNode(node: DoubleListNode) {
    node.pre!.next = node.next;
    node.next!.pre = node.pre;
    this.size--;
  }

  /**
   * 删除最后一个节点并返回
   * @returns
   */
  removeLast(): DoubleListNode | null {
    if (this.size === 0) {
      return null;
    }
    const last = this.tail.pre!;
    this.removeNode(last);

    return last;
  }

  /**
   * 将节点移动到头部
   * @param node
   */
  moveToHead(node: DoubleListNode) {
    this.removeNode(node);
    this.addFirst(node);
  }

  getSize() {
    return this.size;
  }
}

/**
 *LRU缓存 最近最少使用
 使用双向链表 + 哈希表
 
 */
class LRUCache {
  /**
   * 缓存的容量
   */
  capacity: number;
  /**
   * 查找节点的map
   */
  cache: Map<number, DoubleListNode>;
  doubleList: DoubleLinkedList;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.doubleList = new DoubleLinkedList();
  }

  /**
   * 把一本书抽出来放在最上面  是最近的使用
   * @param key
   * @returns
   */
  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) {
      return -1;
    }
    this.doubleList.moveToHead(node);
    return node.value;
  }

  /**
   * 放入一本新书
   * 如果有这本书 抽出来放在最上面，并替换value
   * 没有，则放在最上面   超过容量，把最下面的书移除
   * @param key
   * @param value
   */
  put(key: number, value: number): void {
    const node = this.cache.get(key);
    if (node) {
      node.value = value;
      this.doubleList.moveToHead(node);
    } else {
      const newNode = new DoubleListNode(key,value);
      if (this.cache.size >= this.capacity) {
        const lastNode = this.doubleList.removeLast();
        if (lastNode) {
          this.cache.delete(lastNode.key);
        }
      }
      this.cache.set(key, newNode);
      this.doubleList.addFirst(newNode);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)); // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2)); // 返回 -1 (未找到)
