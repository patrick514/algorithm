//双向链表
function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    //比较链表中的元素是否相等
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    let current //当前节点
    if (this.head == null) {
      this.head = node
    }
    else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = this.head.next
      } else {
        let previous = this.getElementAt(index - 1)
        // for(let i = 0; i< index;i++){
        //   previous = current
        //   current = current.next
        // }
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      }
      else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // function defaultEquals(a, b) {
  //   return a === b;
  // }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }
}
class DoubyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev // 指向前一个结点
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined //tail 尾结点
  }

  push(element) {
    const node = new DoubyNode(element)
    if (this.head == null) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (this.count === index) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        current.pre = node
        node.pre = previous
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.size() - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        current.next.prev = previous
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }


}
const double = new DoublyLinkedList()

double.push(1)
double.push(2)
double.push(3)
double.push(4)
double.insert(0, 0)
// double.removeAt(0)
console.log(double.toString())
console.log(double)