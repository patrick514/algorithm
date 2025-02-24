
//双向链表
class DoubyNode extends Node {
  constructor(element , next , prev){
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends linkedList{
  constructor(equalsFn = defaultEquals){
    super(equalsFn)
    this.tail = undefined
  }
}