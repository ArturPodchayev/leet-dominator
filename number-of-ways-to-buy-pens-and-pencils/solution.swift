class Solution {
    func waysToBuyPensPencils(_ total: Int, _ cost1: Int, _ cost2: Int) -> Int {
        
        var res = 1
        var money = total

        while money >= min(cost1, cost2) {
            res += min(1, money / cost1) + money / cost2
            money -= cost1
        }

        return res
    }
}
