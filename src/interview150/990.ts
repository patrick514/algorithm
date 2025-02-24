function equationsPossible(equations: string[]): boolean {
    // const parent = Array(26).fill(0).map((_, index) => index);
    const parent = Array(26).fill(0)
    for(let i = 0;i<26;i++){
        parent[i] = i
    }

    //找到 该集合的父节点
    const find = (x : number) =>{
        if(parent[x] !== x){
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    // 合并两个集合
    const union = (x:number,y:number) =>{
        let rootX = find(x)
        let rootY = find(y)
        if(rootX !== rootY){
            parent[rootX] = rootY
        }
    }
    // 将相等的归到一个集合
    for(const equation of equations){
        if(equation[1] === '='){
            let char1 = equation.charCodeAt(0) - 'a'.charCodeAt(0)
            let char2 = equation.charCodeAt(3) - 'a'.charCodeAt(0)
            union(char1,char2)
        }
    }
    // 判断不等的在不在一个集合
    for(const eq of equations){
        if(eq[1] === '!'){
            let root1 = find(eq.charCodeAt(0) - 'a'.charCodeAt(0))
            let root2 = find(eq.charCodeAt(3) - 'a'.charCodeAt(0))
            if(root1 === root2){
                return false
            }
        }
    }
    return true
};


console.log(equationsPossible(["a==b", "e==c", "b==c", "a!=e"]))