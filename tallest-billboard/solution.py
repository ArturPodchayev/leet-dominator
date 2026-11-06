class Solution:
    def tallestBillboard(self, rods: List[int]) -> int:
        dict1 = {0: 0}
        for r in rods:
            newDP = {}
            for k, v in dict1.items():
                newDP[k + r] = max(newDP.get(k + r, 0), v + r)
                newDP[k] = max(newDP.get(k, 0), v)
                newDP[k - r] = max(newDP.get(k - r, 0), v)
            dict1 = newDP
        return dict1[0]
