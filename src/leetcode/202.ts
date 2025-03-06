// function isHappy(n: number): boolean {

//     while(n!==1 && n!==4){
//         let s = n.toString().split('')
//         s = Array.from(s)
//         n = s.reduce((a,b)=>a+Math.pow(Number(b),2),0)
//     }
//     if(n===1){
//         return true
//     }
//     console.log(n)
//     return false
// };

function isHappy(n: number): boolean {
    let map = new Map()
    while(n!==1 && !map.has(n)){
        map.set(n,0)
        n = getNext(n)
    }
    
    return n ==1
};

function getNext(n: number){
    let s = n.toString().split('')
  
    // console.log(s)
    n = s.reduce((a,b)=>a+Math.pow(Number(b),2),0)
    return n
}
console.log(getNext(56))
console.log(isHappy(19))