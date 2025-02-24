class Stack {
  constructor() {
    this.item = []
  }

  push(element) {
    this.item.push(element)
  }

  pop() {
    return this.item.pop()
  }

  peek() {
    return this.item[this.item.length - 1]
  }

  isEmpty(){
    return this.item.length === 0
  }

  size(){
    return this.item.length
  }

  clear(){
    this.item = []
  }
}

const stack = new Stack()


stack.push(3)
stack.push(8)
stack.peek()

console.log(stack.isEmpty())

stack.pop()
stack.pop()
console.log(stack.size())
console.log(stack.peek())