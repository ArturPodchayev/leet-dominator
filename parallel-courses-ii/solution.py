class Solution:
    def minNumberOfSemesters(self, n: int, relations: List[List[int]], k: int) -> int:
        @cache
        def backtracking(mask):
            if mask == (1<<n)-1: return 0
            can = []
            for i in range(n):
                if (1<<i) & mask == 0 and mask & d[i] == d[i]:
                    can.append(1<<i)
            res = 10**8
            if not can: return res
            for t in itertools.combinations(can, min(len(can), k)):
                res = min(res, backtracking(mask+sum(t))+1)
            return res
        d = [0]*n
        for s, e in relations:
            d[e-1] |= 1<<(s-1)
        return backtracking(0)
