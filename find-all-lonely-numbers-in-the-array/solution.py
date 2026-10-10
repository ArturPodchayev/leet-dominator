class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:

        s = set(nums)
        res = []
        mpp = Counter(nums)

        for k, v in mpp.items():
            if v == 1:
                if k - 1 not in s and k + 1 not in s:
                    res.append(k)  
        return res
