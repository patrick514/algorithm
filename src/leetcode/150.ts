function evalRPN(tokens: string[]): number {
    let stack: number[] = []
    for (let i = 0; i < tokens.length; i++) {
        if (isNumber(tokens[i])) {
            //要转成整数 后面乘
            stack.push(parseInt(tokens[i]))
        } else {
            let num1 = stack.pop()
            let num2 = stack.pop()

            switch (tokens[i]) {
                case "*":
                    stack.push(num1! * num2!)
                    break
                case "/":
                    //这里js除了有小数  向0 取整  负数取整就错了
                    stack.push(Math.trunc(num2! / num1!))
                    break
                case "+":
                    stack.push(num1! + num2!)
                    break
                case "-":
                    stack.push(num2! - num1!)
                    break
                default:
            }
        }
    }
    return stack.pop()!
};

function isNumber(n:string) {
    return n !== '*' && n !== '/' && n !== '+' && n !== '-'
}

evalRPN(["4", "13", "5", "/", "+"])