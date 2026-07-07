class Solution:
    def sumAndMultiply(self, n: int) -> int:
        return int('0'+''.join([d for d in str(n) if d!='0'])) * sum(int(d) for d in str(n))
        
