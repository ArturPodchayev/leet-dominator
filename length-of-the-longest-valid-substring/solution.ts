function longestValidSubstring(word: string, forbidden: string[]): number {
    const aSet = new Set<string>();
    const aTrie = new Trie();
    for (const aString of forbidden) {
        aSet.add(aString);
        const reverse = Array.from(aString).reverse().join('');
        aTrie.insert(reverse);
    }
    
    let i = 0;
    let j = 0;
    let count = 0;
    let ret = Number.MIN_SAFE_INTEGER;
    let tmpSubstr = word.substring(i, j);
    
    while (j < word.length) {
        tmpSubstr = tmpSubstr.concat(word.charAt(j));
        
        let m = j;
        while (m >= i) {
            let tmpSubstr2 = word.substring(m,j+1);
            const reverse = Array.from(tmpSubstr2).reverse().join('');
            if (!aTrie.startsWith(reverse)) {
                break;
            }
            if (aSet.has(tmpSubstr2)) {
                tmpSubstr = word.substring(m+1,j+1);
                i = m+1;
                break;
            } else {
                m--;
            }
        }
    
        count = j - i + 1;
        if (count > ret) {
            ret = count;
        }
        j++;
    }
    return ret;
};

class Trie {
    str: String;
    isWord: boolean;
    aMap: Map<String, Trie>;
    constructor() {
        this.str = '';
        this.isWord = false;
        this.aMap = new Map();
    }

    insert(word: string): void {
        const charArr: string[] = word.split('');
        let tmpTrieNode: Trie = this;
        let tmpStr = '';
        for (const aChar of charArr) {
            tmpStr += aChar;
            if (!tmpTrieNode.aMap.has(aChar)) {
                const newTrieNode = new Trie();
                newTrieNode.str = tmpStr;
                tmpTrieNode.aMap.set(aChar, newTrieNode);
            }
            tmpTrieNode = tmpTrieNode.aMap.get(aChar) as Trie; // Add type assertion
        }
        tmpTrieNode.isWord = true;
    }

    search(word: string): boolean {
        let tmpTrieNode: Trie = this;
        const charArr = word.split('');
        for (const aChar of charArr) {
            if (!tmpTrieNode.aMap.has(aChar)) {
                return false;
            }
            tmpTrieNode = tmpTrieNode.aMap.get(aChar) as Trie;
        }
        return tmpTrieNode.isWord == true;
    }

    startsWith(prefix: string): boolean {
        let tmpTrieNode: Trie = this;
        const charArr = prefix.split('');
        for (const aChar of charArr) {
            if (!tmpTrieNode.aMap.has(aChar)) {
                return false;
            }
            tmpTrieNode = tmpTrieNode.aMap.get(aChar) as Trie;
        }
        return true;
    }

    static print(aTrie: Trie) {
        const aQueue: Trie[] = [];
        aQueue.push(aTrie);
        while (aQueue.length > 0) {
            let tmpTrieNode = aQueue.pop()!;
            console.log(`${tmpTrieNode.str} ${tmpTrieNode.isWord}`);
            for (const [key, value] of tmpTrieNode.aMap.entries()) {
                aQueue.push(value);
            }
        }
    }
}
