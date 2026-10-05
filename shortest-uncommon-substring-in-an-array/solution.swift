class Solution {
    func shortestSubstrings(_ arr: [String]) -> [String] {
        let arr = arr.map { Array($0) }
        let n = arr.count
        
        func allSubstrings(_ string: [Character]) -> Set<String> {
            var result: Set<String> = []
            for length in 1...string.count {
                for i in 0...(string.count - length) {
                    result.insert(String(string[i..<(i + length)]))
                }
            }
            return result
        }
        
        var prefix: [Set<String>] = Array(repeating: [], count: n)
        var suffix: [Set<String>] = Array(repeating: [], count: n)
        for i in 1..<n {
            prefix[i] = prefix[i - 1].union(allSubstrings(arr[i - 1]))
            suffix[n - i - 1] = suffix[n - i].union(allSubstrings(arr[n - i]))
        }
        
        var answer: [String] = Array(repeating: "", count: n)
        for i in 0..<n {
            let string = arr[i]
            for length in 1...string.count {
                for start in 0...(string.count - length) {
                    let substring = String(string[start..<(start + length)])
                    if !prefix[i].contains(substring) && !suffix[i].contains(substring) {
                        if answer[i].count == 0 || answer[i] > substring {
                            answer[i] = substring
                        }
                    }
                }
                if answer[i].length != 0 {
                    break
                }
            }
        }
        
        return answer
    }
}
