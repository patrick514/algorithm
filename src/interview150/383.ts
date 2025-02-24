function canConstruct(ransomNote: string, magazine: string) {
    const maga  = new Map<string,number>()
    for(let i = 0;i<magazine.length;i++){
        const char = magazine[i]
       
        maga.set(char, (maga.get(char) || 0)+1)
    }
    for(let j = 0;j<ransomNote.length;j++){
        const char  = ransomNote[j]
        if(!maga.has(ransomNote[j])){
            return false;
        }
        maga.set(char, maga.get(char)!-1)
        if(maga.get(char)! < 0){
            return false;
        }
    }
    return true;
};
console.log(canConstruct("aa","ab"))