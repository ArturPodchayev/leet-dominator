class Solution:
    def maxProduct(self, n: int) -> int:
        maxD, maxD2=0, 0
        while n>0:
            n, D=divmod(n, 10)
            if D>=maxD:
                maxD2=maxD
                maxD=D
            elif D>=maxD2:
                maxD2=D
        return maxD*maxD2
