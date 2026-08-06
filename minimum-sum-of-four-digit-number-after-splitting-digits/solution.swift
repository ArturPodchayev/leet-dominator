class Solution {
    func minimumSum(_ num: Int) -> Int {
        let numbers = String(num).compactMap({$0.wholeNumberValue}).sorted()
        var result = 0
        
        for i in 0...3 {
            if i < 2 {
                result += 10 * numbers[i]
            } else {
                result += numbers[i]
            }
        }
        return result
     } 
}
