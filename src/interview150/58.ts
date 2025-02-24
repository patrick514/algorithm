function lengthOfLastWord(s: string): number {
    let len = 0
    let words = s.split(' ')
    console.log(words)
    let i = words.length -1
    len = words[i].length
    while(words[i].length <=0){
        --i
        len = words[i].length
    }
    
    return len
};
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))