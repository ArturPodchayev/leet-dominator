class Solution:
    def relocateMarbles(self, nums: List[int], moveFrom: List[int], moveTo: List[int]) -> List[int]:

        c = set(nums)

        for f, t in zip(moveFrom, moveTo):
            if f in c:
                c.remove(f)
                c.add(t)
        
        ans = []
        for k in c:
            if k:
                ans.append(k)
        ans.sort()
        return ans
        


        
