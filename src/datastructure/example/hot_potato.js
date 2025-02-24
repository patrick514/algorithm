// 击鼓传花
//在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
// 某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。
// 重复这个过程，直到只剩一个孩子（胜者）
class Queue {
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
function hotPotato(elementList, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }

  while(queue.size() > 1){
    for(let i = 0; i< num;i++){
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated:elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});

console.log(`胜利者： ${result.winner}`);