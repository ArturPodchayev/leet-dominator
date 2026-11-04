class Solution {
    func minimumAddedCoins(_ coins: [Int], _ target: Int) -> Int {

        let coins = coins.sorted()
        var tgt = 1
        var i = 0
        var e = 0

        while tgt <= target {
            if i < coins.count, coins[i] <= tgt {
                tgt += coins[i]
                i += 1
            }
            else {
                tgt *= 2
                e += 1
            }
        }

        return e
    }
}
