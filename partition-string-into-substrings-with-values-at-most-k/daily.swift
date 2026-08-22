class Solution {
    func checkDivisibility(_ n: Int) -> Bool {
        var customN = n
        var product = 1
        var sum = 0
        while customN > 0 {
            let left = customN % 10
            sum = sum + left
            product = product * left
            customN = customN / 10
        }
        return n % (product + sum) == 0
    }
}
