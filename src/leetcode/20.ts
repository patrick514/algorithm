class Stack<T> {
    private item: T[] = []

    push(element: T) {
        this.item.push(element)
    }
    pop() {
        this.item.pop()
    }
    top() {
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0
    }
}
function isValid(s: string): boolean {
    let st: Stack<string> = new Stack()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            st.push(s[i])
        } else {
            if (st.isEmpty()) {
                return false
            }
            if (s[i] === ')' && st.top() !== '(') {
                return false
            }
            if (s[i] === ']' && st.top() !== '[') {
                return false
            }
            if (s[i] === '}' && st.top() !== '{') {
                return false
            }
            st.pop()

        }
    }
    return st.isEmpty()

};
console.log(isValid('()[]{}'))
console.log(isValid('({}'))
