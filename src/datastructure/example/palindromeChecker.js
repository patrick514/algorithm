//回文检查器
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

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
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

  peekFront() {
    return this.items[this.count - 1]
  }
  peekBack() {
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

function palindromeChecker(aString) {
  if (aString === undefined || 
     aString === null || 
    (aString !== null && aString.length === 0)){
      return false
  }
  const deque = new Deque()
  //将所有字母转化为小写，同时移除所有的空格 
  // split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表，
  // 将这些子串放入一个数组，并返回该数组
  const lowerString = aString.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstChar, lastChar
  for(let i = 0;i<lowerString.length;i++){
    deque.addBack(lowerString[i])
  }
  while(deque.size() > 1 && isEqual){
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if(firstChar !== lastChar){
      isEqual = false
    }
  }
  return isEqual
  
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a caror a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));



