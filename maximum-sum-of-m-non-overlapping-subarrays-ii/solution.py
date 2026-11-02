from typing import List
from collections import deque


class Solution:
    def maximumSum(self, nums: List[int], m: int, l: int, r: int) -> int:
        """
        Max total sum of at least 1 and at most m non-overlapping subarrays,
        each with length in [l, r].

        f(k) = best sum using exactly k subarrays is concave in k
        (classic exchange argument for disjoint intervals), so we use
        Lagrangian relaxation (WQS / "aliens" trick):

          * charge a penalty `lam` for every chosen subarray and solve the
            unconstrained problem in O(n) with a monotonic-deque DP:
                dp[i] = max(dp[i-1],  P[i] - lam + max_{j in [i-r, i-l]} (dp[j] - P[j]))
          * the bigger lam is, the fewer subarrays the optimum uses ->
            binary search the smallest integer lam with count <= m,
            then f(m) = g(lam) + lam * m.

        "At least one" only matters when even with lam = 0 the optimum takes
        nothing (all subarray sums <= 0); then the answer is simply the best
        single subarray with length in [l, r].

        Total: O(n log A), A = max possible answer.
        """
        n = len(nums)
        P = [0] * (n + 1)
        for i in range(n):
            P[i + 1] = P[i] + nums[i]

        m = min(m, n // l)  # can never place more than n // l subarrays

        # ---- f(1): best single subarray with length in [l, r] -------------
        # max over i of P[i] - min P[j], j in [i - r, i - l]
        best1 = float("-inf")
        dq = deque()
        for i in range(l, n + 1):
            j = i - l  # j enters the window
            while dq and P[dq[-1]] >= P[j]:
                dq.pop()
            dq.append(j)
            while dq[0] < i - r:
                dq.popleft()
            cand = P[i] - P[dq[0]]
            if cand > best1:
                best1 = cand

        # ---- penalized DP (reusable buffers) -------------------------------
        dp = [0] * (n + 1)    # dp[i]  = best (sum - lam * count) on prefix i
        cnt = [0] * (n + 1)   # cnt[i] = fewest subarrays achieving dp[i]
        key = [0] * (n + 1)   # key[j] = dp[j] - P[j] (cached when j is pushed)
        dqi = [0] * (n + 1)   # monotonic deque of indices (manual head/tail)

        def solve(lam: int):
            """Unlimited number of subarrays, each costing `lam`.
            Returns (best value, minimum #subarrays attaining it)."""
            head = tail = 0
            v = c = 0  # dp[0], cnt[0]
            for i in range(1, n + 1):
                j = i - l
                if j >= 0:
                    kj = dp[j] - P[j]
                    cj = cnt[j]
                    # push j, keeping keys decreasing; on ties keep min count
                    while tail > head:
                        t = dqi[tail - 1]
                        kt = key[t]
                        if kt < kj or (kt == kj and cnt[t] >= cj):
                            tail -= 1
                        else:
                            break
                    key[j] = kj
                    dqi[tail] = j
                    tail += 1
                    # drop indices that left the window [i - r, i - l]
                    bound = i - r
                    while dqi[head] < bound:
                        head += 1
                    f = dqi[head]
                    v2 = P[i] - lam + key[f]
                    c2 = cnt[f] + 1
                    if v2 > v or (v2 == v and c2 < c):
                        v, c = v2, c2
                dp[i] = v
                cnt[i] = c
            return v, c

        v0, c0 = solve(0)
        if c0 == 0:        # nothing is worth taking even for free
            return best1   # forced to take the single best subarray
        if c0 <= m:        # unconstrained optimum already fits the budget
            return v0

        # f is concave and integer-valued -> integer penalties suffice.
        # lam* = f(m+1) - f(m) lies in [1, f(1)] here.
        lo, hi = 1, best1
        while lo < hi:
            mid = (lo + hi) // 2
            if solve(mid)[1] <= m:
                hi = mid
            else:
                lo = mid + 1
        g, _ = solve(lo)
        return g + lo * m
