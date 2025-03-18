
// class MinStack {
//     minStack:number[]
//     stack:number[]
//     constructor() {
//         this.minStack = []
//         this.stack = []
//     }

//     push(val: number): void {
//         this.stack.push(val)
//         //当存储最小值的栈为空 或者 当前推入值小于最小栈栈顶
//         //为什么等于也要推进最小栈  因为最小元素 不止一个，后面的pop了，前面的还存在
//         // stack: [2, 2, 3]
//         // minStack: [2, 2]（每次 push(2) 都将其压入 minStack）
//         // 接着执行以下操作：
//         // pop()：弹出栈顶元素 3。
//         // pop()：弹出栈顶元素 2。
//         if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]){
//             this.minStack.push(val)
//         }

//     }

//     pop(): void {
//         //弹出值为最小值时，最小栈也要弹出 只存了最小值，因为是栈，pop不了最小值前面的小值
        //      因为栈是按顺序的，前面的小值只会在最小值前面
//         if(this.stack.pop() === this.minStack[this.minStack.length-1]){
//             this.minStack.pop()
//         }
//     }

//     top(): number {
//         return this.stack[this.stack.length-1]
//     }

//     getMin(): number {
//         return this.minStack[this.minStack.length-1]
//     }
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


class MinStack {
    minSt:number[]
    st:number[]
  constructor() {
    this.minSt = []
    this.st = []
  }

  push(val: number): void {
    this.st.push(val)
    if(this.minSt.length === 0 || val <= this.minSt[this.minSt.length-1]){
        this.minSt.push(val)
    }
  }

  pop(): void {
    const val = this.st.pop()
    if(val === this.minSt[this.minSt.length-1]){
        this.minSt.pop()
    }
  }

  top(): number {
    return this.st[this.st.length -1]
  }

  getMin(): number {
    return this.minSt[this.minSt.length - 1];
  }
}

let  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   
minStack.pop();
minStack.top();     
minStack.getMin(); 