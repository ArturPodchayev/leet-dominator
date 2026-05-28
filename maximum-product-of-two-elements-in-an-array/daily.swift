class Solution {
    func stringIndices(_ wordsContainer: [String], _ wordsQuery: [String]) -> [Int] {
        
        class TrieNode {
            var children = [Character: TrieNode]()
            var bestIndex = -1
            var bestLength = Int.max
        }
        
        let root = TrieNode()

        for (index, word) in wordsContainer.enumerated() {
            let chars = Array(word)
            var node = root
            for char in chars.reversed() {
                if node.children[char] == nil {
                    node.children[char] = TrieNode()
                }
                node = node.children[char]!
                if chars.count < node.bestLength || (chars.count == node.bestLength && index < node.bestIndex) {
                    node.bestIndex = index
                    node.bestLength = chars.count
                }
            }
            if chars.count < root.bestLength || (chars.count == root.bestLength && index < root.bestIndex) {
                root.bestIndex = index
                root.bestLength = chars.count
            }
        }
        
        // Поиск
        var result = [Int]()
        
        for query in wordsQuery {
            let chars = Array(query)
            var node = root
            var best = root.bestIndex
            
            for char in chars.reversed() {
                guard let next = node.children[char] else { break }
                node = next
                best = node.bestIndex
            }
            
            result.append(best)
        }
        
        return result
    }
}
