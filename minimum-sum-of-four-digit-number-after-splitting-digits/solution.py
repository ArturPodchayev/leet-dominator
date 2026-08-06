class Solution:
    def minimumSum(self, num: int) -> int:
        dig = list(str(num))
        m1 = min(dig)
        dig.remove(m1)
        m2 = min(dig)
        dig.remove(m2)
        n1 = int(m1 + dig[0])
        n2 = int(m2 + dig[1])
        return n1+n2
