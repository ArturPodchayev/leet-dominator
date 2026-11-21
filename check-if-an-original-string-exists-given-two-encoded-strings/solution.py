class Solution:
    def possiblyEquals(self, s1, s2):
        m, n = len(s1), len(s2)

        @lru_cache(None)
        def function(i,j,balance):
            if i == m and j == n:
                return balance == 0 

            if i < m and s1[i].isnumeric():
                k, val = i, 0 
                while k < m and s1[k].isnumeric():
                    val = val*10 + int(s1[k])
                    if function(k+1,j,balance-val):
                        return True 
                    k += 1

            elif j < n and s2[j].isnumeric():
                k, val = j, 0 
                while k < n and s2[k].isnumeric():
                    val = val*10 + int(s2[k])
                    if function(i,k+1,balance+val):
                        return True
                    k += 1

            elif balance == 0:
                if i < m and j < n and s1[i] == s2[j]:
                    return function(i+1,j+1,balance)

            elif balance > 0:
                if i < m:
                    return function(i+1,j,balance-1)

            elif balance < 0:
                if j < n:
                    return function(i,j+1,balance+1)

            return False 

        return function(0,0,0)
