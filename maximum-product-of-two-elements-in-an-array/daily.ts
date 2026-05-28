// Define the Node structure for the Trie
class TrieNode {
    children: Record<string, TrieNode>;
    idx: number;
    len: number;

    constructor() {
        this.children = {};
        this.idx = Infinity;
        this.len = Infinity;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Helper to evaluate tie-breaker rules:
    // 1. Prioritize shorter length
    // 2. If lengths are equal, prioritize smaller index
    update(node: TrieNode, len: number, idx: number) {
        if (len < node.len || (len === node.len && idx < node.idx)) {
            node.len = len;
            node.idx = idx;
        }
    }

    insert(word: string, idx: number) {
        let node = this.root;

        // Update root for the case where query shares NO suffix with any word
        this.update(node, word.length, idx);

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            
            // Cache the best possible index at this specific prefix/suffix depth
            this.update(node, word.length, idx);
        }
    }

    search(word: string): number {
        let node = this.root;

        for (const char of word) {
            // If the suffix path breaks, we stop and use the best answer found so far
            if (!node.children[char]) {
                break;
            }
            node = node.children[char];
        }

        // The node we stopped at inherently stores the optimal index
        return node.idx;
    }
}

// Utility function to reverse strings
function reverseStr(s: string): string {
    return s.split('').reverse().join('');
}

function stringIndices(
    wordsContainer: string[],
    wordsQuery: string[]
): number[] {
    const trie = new Trie();

    // 1. Build the Trie using reversed container words (Suffix Trie)
    for (let i = 0; i < wordsContainer.length; i++) {
        trie.insert(reverseStr(wordsContainer[i]), i);
    }

    const ans: number[] = [];

    // 2. Query the Trie using reversed query words
    for (const word of wordsQuery) {
        ans.push(trie.search(reverseStr(word)));
    }

    return ans;
}
