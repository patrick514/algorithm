// let n = 153
// for (let i = 100; i < 1000; ++i) {
//     let a = i / 100
//     a = parseInt(a + '')

//     let b = (i - a * 100) / 10
//     b = parseInt(b + '')
//     let c = i % 10

//     // console.log(a, b, c)
//     // break;
//     if (a * a *a + b * b*b + c *c* c === i) {
//         console.log(i)
//     }

// let str = ' fdsafa'
// console.log(str)
// console.log(str[0], str.charAt(2))
// str.substring(2)
// let strre = str.replace(/a/g, '')
// let d = new Date()

// console.log(d.getDay())


// let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// let result:string = ''
// for (let i = 0; i < 4; i++) {
//     let n = Math.floor(Math.random() * str.length)
//     result += str[n]
// }
// console.log(typeof result)


class TrieNode {
    son
    end
    constructor() {
        this.son = Array(26).fill(null);
        this.end = false;
    }
}

class Trie {
    root;
    constructor() {
        this.root = new TrieNode();
    }

    // 插入单词
    insert(word:string) {
        let cur = this.root;
        for(const c of word){
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.son[index] === null){
                cur.son[index] = new TrieNode();
            }
            cur = cur.son[index];
        }
        //判断单词 ，而不是前缀
        cur.end = true;
    }

    // 辅助函数，用于搜索单词或前缀
    #find(word: string) {
        let cur = this.root;
        for(const c of word){
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.son[index] === null){
                return 0;
            }
            cur = cur.son[index];
        }
        return cur.end ? 2: 1;
    }

    // 2是单词
    search(word: string) {
       return this.#find(word) === 2;
    }

    // 1是前缀
    startsWith(prefix: string) {
        // return this.#find(prefix) === 1;
        //非0 表示前缀存在，可能是单词可能是前缀
        return this.#find(prefix) !== 0;

    }
}
const trie = new Trie();

// 插入单词
trie.insert("apple");
trie.insert("app");

// 检查单词
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("appl"));  // false

// 检查前缀
console.log(trie.startsWith("app"));  // true
console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("banana")); // false

