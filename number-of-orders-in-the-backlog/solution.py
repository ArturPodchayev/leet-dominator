class Solution:
    def getNumberOfBacklogOrders(self, orders: List[List[int]]) -> int:
        buy, sell = [], [] # max-heap & min-heap 
        for p, q, t in orders: 
            if t: heappush(sell, [p, q])
            else: heappush(buy, [-p, q])
            
            while buy and sell and -buy[0][0] >= sell[0][0]: 
                qty = min(buy[0][1], sell[0][1])
                buy[0][1] -= qty
                sell[0][1] -= qty
                if not buy[0][1]: heappop(buy)
                if not sell[0][1]: heappop(sell)
        return (sum(q for _, q in sell) + sum(q for _, q in buy)) % 1_000_000_007
