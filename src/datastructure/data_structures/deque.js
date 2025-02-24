class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    }
    else if (this.lowestCount >= 1) {
      this.lowestCount--
      this.items[this.lowestCount] = element
      
    }
    else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  removeBack(){
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.count -1]
    delete this.items[this.count -1]
    this.count--
    return result

  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peekFront(){
    return this.items[this.count - 1]
  }
  peekBack(){
    return this.items[this.items[this.lowestCount]]
  }


  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return undefined
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // 输出true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // 输出3
console.log(deque.isEmpty()); // 输出false
deque.removeFront(); // 移除John
console.log(deque.toString()); // Jack, Camila
deque.removeBack(); // Camila决定离开
console.log(deque.toString()); // Jack
deque.addFront('John'); // John回来询问一些信息
console.log(deque.toString()); // John, Jack