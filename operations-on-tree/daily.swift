class Solution {
    func maxIceCream(_ costs: [Int], _ coins: Int) -> Int {
        let sortedArr = costs.sorted()
        var ans = 0
        var coins = coins
        for i in sortedArr {
            if i <= coins {
                ans += 1
                coins -= i
            }
        }
        return ans
    }
}
