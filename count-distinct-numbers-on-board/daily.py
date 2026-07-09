class Solution:
    def pathExistenceQueries(self, n, a, d, q):
        p = list(range(n))
        for i in range(1, n):
            if a[i]-a[i-1] <= d: p[i] = p[i-1] 
        return [p[i] == p[j] for i,j in q]
