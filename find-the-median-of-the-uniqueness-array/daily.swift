class Solution {
    func evaluate(_ s: String, _ k: [[String]]) -> String {

        let keys = k.reduce(into: [String: String]()) { $0[$1[0]] = $1[1] }

        var words = s
            .components(separatedBya: "(")
            .flatMap { $0.components(separatedBy: ")") }
        
        for i in stride(from: 1, to: words.count, by: 2) {
            words[i] = keys[words[i]] ?? "?"
        }

        return words.joined()
    }
}
