class Solution:
    def minimumAddedCoins(self, coins: List[int], target: int) -> int:
        coins.sort()
        res = 0
        reach = 0
        for coin in coins:
            while reach < coin - 1:
                reach = reach * 2 + 1
                res += 1
            reach += coin
        while reach < target:
            reach = reach * 2 + 1
            res += 1
        return res

            
