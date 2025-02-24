function isIsomorphic(s: string, t: string): boolean {
    const s2t = new Map<string, string>();
    const t2s = new Map<string, string>();
    const len: number = s.length;

    for(let i =0;i<len;i++){
        let x = s[i];
        let y = t[i];
        if(s2t.has(x) && s2t.get(x)!==y || t2s.has(y) && t2s.get(y)!==x){
            return false;
        }
        s2t.set(x,y);
        t2s.set(y,x);

    }
    // console.log(s2t)
    // console.log(t2s)

    return true;
}

console.log(isIsomorphic('egg','add'))
console.log(isIsomorphic('paper','title'))
console.log(isIsomorphic('foo','bar'))