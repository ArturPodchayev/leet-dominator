class Solution:
    def minimumMoney(self, transactions: List[List[int]]) -> int:
        maxInNegDiff = 0
        maxCashback = 0
        minMoney = 0
      
        for cost,cashback in transactions:
            if cashback >= cost:
                maxInNegDiff = max(maxInNegDiff,cost)
                continue
            
            minMoney += cost - cashback
            maxCashback = max(maxCashback, cashback)
            
        
        return minMoney + max(maxInNegDiff ,maxCashback)
