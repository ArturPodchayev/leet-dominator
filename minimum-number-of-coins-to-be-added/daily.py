class Solution:
    def minOperations(self, nums: List[int], x: int, k: int) -> int:
        
        n = len(nums)

        # ---- Part 1: cost[i] = ops to make nums[i : i+x] all equal ----
        low, high = SortedList(), SortedList()   # small half, big half
        sumLow = sumHigh = 0
        cost = []

        for i, v in enumerate(nums):
            # add new number: put in low, then send low's biggest to high
            low.add(v); sumLow += v
            t = low.pop(); sumLow -= t
            high.add(t); sumHigh += t

            # remove the number that left the window
            if i >= x:
                old = nums[i - x]
                if old >= high[0]:
                    high.remove(old); sumHigh -= old
                else:
                    low.remove(old); sumLow -= old

            # keep sizes balanced (low has equal or 1 more)
            while len(low) < len(high):
                t = high.pop(0); sumHigh -= t
                low.add(t); sumLow += t
            while len(low) > len(high) + 1:
                t = low.pop(); sumLow -= t
                high.add(t); sumHigh += t

            # window is full -> compute its cost
            if i >= x - 1:
                med = low[-1]
                cost.append(med * len(low) - sumLow + sumHigh - med * len(high))

        # ---- Part 2: pick k non-overlapping windows ----
        INF = float('inf')
        prev = [0] * (n + 1)          # using 0 windows costs 0
        for _ in range(k):
            cur = [INF] * (n + 1)
            for i in range(x, n + 1):
                # skip element i-1, OR end a window at i-1
                cur[i] = min(cur[i - 1], prev[i - x] + cost[i - x])
            prev = cur

        return prev[n]
