class Solution:
    def maximumSaleItems(self, items, budget):
        ctr = Counter()
        mp = float('inf')
        for f, p in items:
            ctr[f] += 1
            if p < mp:
                mp = p
        mctr = Counter()
        M = max(ctr)
        for f in ctr:
            m = 1
            while f * m <= M:
                mctr[f] += ctr[f * m]
                m += 1
        arr = [(p, mctr[f] - 1) for f, p in items if mctr[f] > 1]
        arr.append((2 * mp, float('inf')))
        arr.sort()
        res = 0
        for p, q in arr:
            c = min(q, budget // p)
            res += 2 * c
            budget -= c * p
        return res + budget // mp
