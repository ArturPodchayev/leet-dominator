class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var result: [String] = []
        func backtrack(_ currentSet: String, _ openPar: Int, _ closePar: Int) {
            if currentSet.count == n * 2 {
                result.append(currentSet)
                return
            }
            
            if openPar < n {
                backtrack(currentSet + "(", openPar + 1, closePar)
            }
            
            if closePar < openPar {
                backtrack(currentSet + ")", openPar, closePar + 1)
            }
        }
        backtrack("", 0, 0)
        return result        
    }
}
