class Solution {
    func minimumBeautifulSubstrings(_ s: String) -> Int {
        return partition(Array(s))
    }
    
    private func partition(_ s: [Character]) -> Int {
        // Base case: if the input string is already beautiful, return 1
        if isBeautiful(s) { return 1 }
        
        // If the first character is 0, there is no way to split the string into beautiful substrings
        // since one of the substrings will always have a leading 0
        if s.first! == "0" { return -1 }
        
        var answer: Int = .max
        
        // Try to split the string at index from 1 to n-1
        // For example, if the string is "101", we will try to split it into "1 01" and "10 1"
        for splitIndex in 1..<s.endIndex {
            // Split the string into current and remainder substrings
            var current = Array(s[0..<splitIndex])
            var remainder = Array(s[splitIndex..<s.endIndex])
            
            // If the current substring is not beautiful, continue to the next split index
            if !isBeautiful(current) { continue }
            
            // Initialize the current answer to 1 (for the current substring)
            var currentAnswer = 1
            
            // Recursively call the partition function on the remainder substring
            var nextAnswer = partition(remainder)
            
            // Only update the answer if the next answer is positive (the remainder substring can be split into beautiful substrings)
            if nextAnswer > 0 {
                currentAnswer += nextAnswer
                answer = min(answer, currentAnswer)
            }
        }
        
        // If the answer is still equal to its initial value (max), return -1 (it is not possible to split the string into beautiful substrings)
        return answer == .max ? -1 : answer
    }
    
    private func isBeautiful(_ s: [Character]) -> Bool {
        // Check if the input string is empty or starts with a 0
        if s.count <= 0 || s.first! == "0" {
            return false
        }
        
        // Convert the input string from binary to decimal
        var number = Int(String(s), radix: 2) ?? 0
        
        // Check if the input string is a power of 5
        while number > 0 && number % 5 == 0 {
            number = number / 5
        }        
        return number == 1
    }
}
