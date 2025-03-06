function romanToInt(s: string): number {
    let num: number = 0
    const romanMap = new Map<string, number>()
    romanMap.set('I', 1)
    romanMap.set('V', 5)
    romanMap.set('X', 10)
    romanMap.set('L', 50)
    romanMap.set('C', 100)
    romanMap.set('D', 500)
    romanMap.set('M', 1000)
    for (let i = 0; i < s.length; i++) {
        const value:number = romanMap.get(s[i]) as number
        if(i < s.length-1 && value < (romanMap.get(s[i+1]) as number)){
            num -= value
        }else{
            num += value
        }
    }
    // console.log(romanMap)
    return num
};

console.log(romanToInt('MCMXCIV'))