class TrieNode:
    def __init__(self):
        self.children = {}
        self.best = -1


class Solution:
    def stringIndices(self, wordsContainer, wordsQuery):
        def better(idx1, idx2):
            if idx2 == -1:
                return True
            if len(wordsContainer[idx1]) < len(wordsContainer[idx2]):
                return True
            if len(wordsContainer[idx1]) == len(wordsContainer[idx2]):
                return idx1 < idx2
            return False
        root = TrieNode()
        for i, word in enumerate(wordsContainer):
            rev = word[::-1]
            if better(i, root.best):
                root.best = i
            node = root
            for ch in rev:
                if ch not in node.children:
                    node.children[ch] = TrieNode()
                node = node.children[ch]
                if better(i, node.best):
                    node.best = i
        ans = []
        for word in wordsQuery:
            rev = word[::-1]
            node = root
            for ch in rev:
                if ch not in node.children:
                    break
                node = node.children[ch]
            ans.append(node.best)
        return ans
