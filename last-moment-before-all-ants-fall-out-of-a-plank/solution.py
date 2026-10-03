class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        a=0
        if left:
            a=max(left)
        for i in right:
            a=max(a,n-i)
        return a
