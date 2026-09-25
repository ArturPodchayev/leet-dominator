class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:

        if k == 2:
            return max(price) - min(price)
            
        price.sort()

        # Locate smallest invalid tastiness in [low, high)
        low = 1
        high = (price[-1] - price[0]) // (k - 1) + 1

        while high >= low:

            mid = (high + low) // 2
            bound = price[0] + mid
            size = k - 1
            for p in price:
                if p >= bound:
                    bound = p + mid
                    if size == 2:
                        if price[-1] >= bound:
                            low = mid + 1
                            size = 0
                        break
                    size -= 1

            if size:
                high = mid - 1

        return low - 1
