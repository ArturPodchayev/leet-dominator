from collections import deque, defaultdict

class Solution:
    def minArrivalsToDiscard(self, arrivals: list[int], w: int, m: int) -> int:
        q = deque()
        cnt = defaultdict(int)
        ans = 0
        for i, x in enumerate(arrivals):
            while q and q[0][0] <= i - w:
                _, t = q.popleft()
                cnt[t] -= 1
                if cnt[t] == 0:
                    del cnt[t]
            if cnt[x] >= m:
                ans += 1
            else:
                cnt[x] += 1
                q.append((i, x))
        return ans
