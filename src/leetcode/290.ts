function wordPattern(pattern: string, s: string): boolean {
    let words = s.split(' ')
    console.log(words)
    if (pattern.length !== words.length) {
        return false
    }
    const wordToChar = new Map<string, string>()
    const charToWord = new Map<string, string>()

    for (let i = 0; i < words.length; ++i) {
        let word = words[i]
        let char = pattern[i]
        if (!wordToChar.has(word) && !charToWord.has(char)) {
            wordToChar.set(word, char)
            charToWord.set(char, word)
        } else {
            if (wordToChar.get(word) !== char || charToWord.get(char) !== word) {
                return false
            }
        }
        console.log(wordToChar,charToWord)
    }
    return true
};

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern("abba", "dog cat cat dog")); // 输出: true
console.log(wordPattern("abba", "dog cat cat fish")); // 输出: false
console.log(wordPattern("aaaa", "dog cat cat dog")); 