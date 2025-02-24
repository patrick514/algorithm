export default class Queue {
  constructor() {
    this.count = 0 //整个长
    this.lowestCount = 0 //第一个元素队列前端
    this.items = {}
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
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

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('john')
queue.enqueue('jan')
queue.enqueue('jfdn')
queue.enqueue('jghn')
queue.dequeue()
console.log(queue.toString())
console.log(queue.size())
console.log(queue.peek())