class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        adj=[[] for i in range(n)]
        for e in roads:
            adj[e[0]].append(e[1])
            adj[e[1]].append(e[0])
        r=0    
        for i in range(n):
            for j in range(i+1,n):
                x=len(adj[i])
                y=len(adj[j])
                if i in adj[j] or j in adj[i]:
                    r=max(r,x+y-1)
                else:
                    r=max(r,x+y)    
        return r    


        
