class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }
  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear() {
    this.items = []
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}


function decimalToBinary(decNumber,base) {
  const remStack = new Stack()
  let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let rem
  let number = decNumber
  let binaryString = ''
  if(base < 2 && base > 36){
    return ''
  }
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number  = Math.floor(number / base)
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }
  return binaryString
}

console.log(decimalToBinary(100345,16))
console.log(decimalToBinary(100345, 8))

