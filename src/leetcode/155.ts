
class MinStack {
    minStack:number[]
    stack:number[]
    constructor() {
        this.minStack = []
        this.stack = []
    }

    push(val: number): void {
        this.stack.push(val)
        //当存储最小值的栈为空 或者 当前推入值小于最小栈栈顶
        //为什么等于也要推进最小栈
        // stack: [2, 2, 3]
        // minStack: [2, 2]（每次 push(2) 都将其压入 minStack）
        // 接着执行以下操作：
        // pop()：弹出栈顶元素 3。
        // pop()：弹出栈顶元素 2。
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]){
            this.minStack.push(val)
        }

    }

    pop(): void {
        //弹出值为最小值时，最小栈也要弹出
        if(this.stack.pop() === this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length-1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */