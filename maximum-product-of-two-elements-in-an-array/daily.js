/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    wordsContainer = wordsContainer.map(s => s.split('').reverse().join(''))
    wordsQuery = wordsQuery.map(s => s.split('').reverse().join(''))

    class TrieNode {
        constructor() {
            this.children = {}
            this.best = -1
        }
    }

    const root = new TrieNode()
    for (let i = 0; i < wordsContainer.length; i++) {
        let node = root;
        if (root.best === -1 || wordsContainer[i].length < wordsContainer[root.best].length) {
            root.best = i
        }

        for (let j = 0; j < wordsContainer[i].length; j++) {
            const c = wordsContainer[i][j];
            if (!node.children[c]) {
                node.children[c] = new TrieNode()
            }
            node = node.children[c]

            if (node.best === -1) {
                node.best = i
            }

            if (wordsContainer[i].length < wordsContainer[node.best].length) {
                node.best = i
            }
        }
    }

    const ans = []
    for (let i = 0; i < wordsQuery.length; i++) {
        let best = root.best;
        let node = root;

        for (let j = 0; j < wordsQuery[i].length; j++) {
            const c = wordsQuery[i][j]
            if (!node.children[c]) {
                break
            }
            node = node.children[c];
        }
        ans[i] = node.best
    }

    return ans
};
