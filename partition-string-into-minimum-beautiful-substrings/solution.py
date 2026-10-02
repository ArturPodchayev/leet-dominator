class Solution:
    def minimumBeautifulSubstrings(self, s: str) -> int:
        power = 0 
        powers = []
        n = 5
        minpartitions = float('inf')
        while len(str(bin(n ** power))[2:]) < 16:
            powers.append(str(bin(n ** power))[2:])
            power += 1
            
        def backtrack(i, j, partitions):
            nonlocal minpartitions
            if j > len(s):
                if s[i:j] in powers or i > len(s) - 1:
                    minpartitions = min(minpartitions, partitions)
                return
            
            backtrack(i, j + 1, partitions)
            if s[i:j] in powers:
                backtrack(j, j + 1, partitions + 1)

        backtrack(0, 1, 1)
        return -1 if minpartitions == float('inf') else minpartitions
