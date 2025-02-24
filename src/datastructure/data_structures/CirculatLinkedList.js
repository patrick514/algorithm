//循环链表
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
class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(element) {
    const node = new Node(element)
    let current
    if(this.head == null){
      this.head = node
    }
    else{
      current = this.getElementAt(this.size() -1)
      current.next = node
    }
    node.next = this.head
    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // if no node  in list
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size() - 1);
          // update last element
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        }
        else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      }
      else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}


const circularLinkedList = new CircularLinkedList()

circularLinkedList.push(1)
circularLinkedList.push(2)
circularLinkedList.push(3)
circularLinkedList.push(4)
circularLinkedList.insert(0,0)
circularLinkedList.removeAt(0)
console.log((circularLinkedList.toString()))
console.log(circularLinkedList)
