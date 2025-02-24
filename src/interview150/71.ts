function simplifyPath(path: string): string {
    const stack:string[] = []
    //按/分割成数组
    const parts = path.split('/')
    for(const part of parts){
        //继续 不管 就是当前目录
        if(part === '' || part === '.'){
            continue

        }else if(part === '..'){ // 栈中还有时，跳到上一目录
            if(stack.length > 0){
                stack.pop()
            }
        }else{
            stack.push(part)
        }
    }
    return '/' + stack.join('/')
};

console.log(simplifyPath('/home//foo/'))