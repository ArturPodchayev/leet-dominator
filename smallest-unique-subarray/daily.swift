class Solution {
    func minAddToMakeValid(_ s: String) -> Int {
        var openCount = 0  
        var closeCount = 0 
        
        for char in s {
            if char == "(" {
                openCount += 1
            } else {
                if openCount > 0 {
                    openCount -= 1 
                } else {
                    closeCount += 1 
                }
            }
        }
        
        return openCount + closeCount
    }
}
